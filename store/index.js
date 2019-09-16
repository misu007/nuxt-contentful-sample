import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

moment.locale('ja');

Vue.use(Vuex);

import * as contentful from 'contentful';

const client = contentful.createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_D_ACCESS_TOKEN,
  previewToken: process.env.CTF_P_ACCESS_TOKEN,
  environment: process.env.CTF_ENVIRONMENT
});


export const state = () => ({
  contentful: client,
  posts: [],
  loading: null,
  cats: []
})

export const mutations = {
  saveCats(state, cats) {
    Vue.set(state, 'cats', cats);
  },
  savePosts(state, posts) {
    Vue.set(state, 'posts', posts);
  }
}

export const getters = {
  arcs: state => {
    const arcs = {};
    state.posts.forEach(post => {
      if (!arcs.hasOwnProperty(post.yyyym)) {
        arcs[post.yyyym] = [];
      }
      arcs[post.yyyym].push(post.id);
    });
    return Object.keys(arcs).map(arc => {
      return {
        name: arc,
        posts: arcs[arc]
      };
    });
  },
  tags: state => {
    const tags = {};
    state.posts.forEach(post => {
      if (post.fields && post.fields.tags) {
        post.fields.tags.forEach(tag => {
          if (!tags.hasOwnProperty(tag)) {
            tags[tag] = [];
          }
          tags[tag].push(post.id);
        })
      }
    });
    return Object.keys(tags).map(tag => {
      return {
        name: tag,
        posts: tags[tag]
      };
    });
  },
  posts: state => {
    return state.posts;
  },
  post: state => id => {
    if (state.posts && state.posts.length > 0 && id && id.length > 3) {
      return state.posts.find(post => {
        return post.id == id;
      });
    }
    return null;
  },
  cat: state => id => {
    if (id && id.length > 1) {
      const cat = state.cats.find(item => {
        return item.id == id;
      });
      if (cat) {
        return cat.fields;
      }
    }
    return {};
  },
  catByName: state => name => {
    if (name && name.length > 1) {
      const cat = state.cats.find(item => {
        return item.fields.label == name;
      });
      if (cat) {
        return cat.fields;
      }
    }
    return null;
  }
}

export const actions = {
  doInit({ commit }) {
    client
      .getEntries({ content_type: 'blog', order: "-fields.publishedDate" })
      .then(posts => {
        console.log("SUCCESS", posts);
        if (posts && posts.items) {
          const items = posts.items.map(item => {
            const mm = moment(item.fields.publishedDate);
            return Object.assign(item, {
              id: item.fields.id,
              yyyym: mm.format('YYYY.M'),
              date: mm.format('YYYY.M.D')
            });
          });
          commit('savePosts', items);
        }
      })
      .catch(err => {
        console.log("ERROR", err);
      });
    client
      .getEntries({ content_type: 'category', order: "fields.order" })
      .then(cats => {
        console.log("SUCCESS", cats);
        if (cats && cats.items) {
          const items = cats.items.map(item => {
            return Object.assign(item, { id: item.fields.id });
          });
          commit('saveCats', items);
        }
      })
      .catch(err => {
        console.log("ERROR", err);
      });

  }
}


