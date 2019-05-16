import Immutable from "immutable";
import { NEW_LINK, UPDATE_LINK_VOTE, TRASH_LINK } from "../actions/links";

const initialState = {
  done: false,
  error: {},
  link: [
    {
      name: "HepsiBurada",
      url: "https://hepsiburada.com",
      vote: 10
    },
    {
      name: "Google",
      url: "https://www.google.com",
      vote: 3
    },
    {
      name: "Amazon",
      url: "https://amazon.com",
      vote: 4
    },
    {
      name: "Facebook",
      url: "https://facebook.com",
      vote: 0
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      vote: 0
    },
    {
      name: "Serkan Kesen",
      url: "https://serkankesen.com",
      vote: 0
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_LINK:
      return Immutable.fromJS(state)
        .mergeDeep({
          done: true,
          link: action.link
        })
        .toJS();
    case UPDATE_LINK_VOTE:
      [...state.link].forEach(element => {
        if (element.name === action.link.name) {
          element.vote += action.vote;
        }
      });
      return Immutable.fromJS(state)
        .mergeDeep({
          ...state.link
        })
        .toJS();

    case TRASH_LINK:
      const index = state.link.map(item => item.name).indexOf(action.link.name);
      const changeState = [
        ...state.link.slice(0, index),
        ...state.link.slice(index + 1)
      ];
      return Immutable.fromJS(state)
        .setIn(["link"], changeState)
        .toJS();
    default:
      return state;
  }
};
