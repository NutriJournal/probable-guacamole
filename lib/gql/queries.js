import gql from "graphql-tag";

export const GET_USER = gql`
  query getUser{
    user {
      id
      name
      email
    }
  }
`;

export const GET_ALL_USERS = gql`
  query getAllUsers{
    users {
      id
      name
      email
    }
  }
`;

export const ME = gql`
  query me{
    me {
      id
      name
      email
      profile {
        id
        age
        weight
        height
        gender
        goal_weight
        activity_level
        diet
        fat
        carbs
        protein
        calories
      }
      weightLogs {
        current_weight
        id
      }
    }
    lowerNav @client
  }
`;

export const USER_DASH_HEADER = gql`
  query userDashHeader{
    me {
      id
      name
      profile {
        id
        weight
        gender
      }
      weightLogs {
        date
        current_weight
        id
      }
    }
  }
`;

export const GET_PROGRESS_DATA = gql`
  query getProgressData{
    myDailyRecords {
      id
      date
    }
    me {
      id
      profile {
        id
        goal_weight
        weight
      }
    }
  }
`;

export const GET_FOOD_LOG = gql`
  query getFoodLog{
    myDailyRecords {
      id
      date
      calories
      fat
      carbs
      fiber
      protein
      food_string
      meal_type
    }
  }
`;

export const GET_FOODJOURNAL_LOGS = gql`
  query getFoodJournalLogs{
    myDailyRecords {
      id
      date
      calories
      fat
      carbs
      fiber
      protein
      food_string
      meal_type
    }
    mealType @client
  }
`;

export const GET_DASHNAV_STATE = gql`
  query GetDashNavState{
    me {
      id
      name
      profile {
        id
      }
    }
    lowerNav @client
    journalComponent @client
  }
`;

export const GET_MEAL_TYPE = gql`
  {
    mealType @client
  }
`;

export const GET_OPEN_LOG_STATE = gql`
  {
    logType @client
    mealType @client
  }
`;

export const GET_LOG_TYPE_STATE = gql`
  {
    logType @client
  }
`;

export const GET_SEARCH_RESULTS = gql`
  query GetSearchResults{
    me {
      id
      name
    }
    searchResults @client
  }
`;
export const GET_NUTRITION = gql`
  {
    nutritionInfo @client
    lowerNav @client
  }
`;

export const GET_FORUM_SELECTION_STATE = gql`
  {
    activeCat @client
  }
`;

export const GET_LAST_WEIGHT_LOG = gql`
  query getLastWeightLog{
    me {
      id
      profile {
        id
        weight
      }
    }
    myWeightLogs(orderBy: createdAt_DESC, first: 1) {
      id
      current_weight
    }
  }
`;

export const GET_WEIGHT_LOGS = gql`
  query getWeightLogs{
    myWeightLogs(orderBy: date_DESC) {
      date
      current_weight
      id
    }
    me {
      id
      name
      profile {
        id
        weight
        gender
        goal_weight
      }
    }
  }
`;

export const GET_FORUM_TOPICS = gql`
	query getForumTopics{
    posts {
      body
      id
      comments {
        id
        user_id
        body
      }
      user {
        id
        name
        email
      }
      viewCount
      title
      createdAt
      updatedAt
      likeCount
  }
    me {
      id
      name
    }
	}
`;

export const GET_POST_COMMENTS = gql`
query getPostComments{
  comments {
    id
    user_id
    user {
      id
      name
    }
    updatedAt
    likeCount
    body
		post {
      id
    }
  }
  me {
    id
  }
}
`

export const GET_POST_DETAILS = gql`
query getPost($id: String!) {
  post(
    id: $id
  ) {
    id
    body
    title
    user {
      id
      name
    }
    user_id
    comments {
      id
      user {
        id
        name
      }
      body
    }
    viewCount
    likeCount
  }
  me {
    id
    name
  }
}
`
