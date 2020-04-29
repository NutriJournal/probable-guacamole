import gql from "graphql-tag";

export const LOG_IN = `
  mutation LogIn($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      token
      user {
        id
        name
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation ADD_USER($name: String!, $email: String!, $password: String!) {
    createUser(data: { name: $name, email: $email, password: $password }) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;

export const CREATE_PROFILE = gql`
  mutation CREATE_PROFILE(
    $age: Int!
    $weight: Int!
    $height: Int!
    $gender: Boolean
    $goal_weight: Int
    $activity_level: Int
    $fat: Int
    $carbs: Int
    $protein: Int
  ) {
    createProfile(
      data: {
        age: $age
        weight: $weight
        height: $height
        gender: $gender
        goal_weight: $goal_weight
        activity_level: $activity_level
        fat: $fat
        carbs: $carbs
        protein: $protein
      }
    ) {
      id
      age
      weight
      height
      gender
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation UPDATE_PROFILE(
    $age: Int!
    $weight: Int!
    $height: Int!
    $gender: Boolean
    $goal_weight: Int
    $activity_level: Int
    $fat: Int
    $carbs: Int
    $protein: Int
  ) {
    updateProfile(
      data: {
        age: $age
        weight: $weight
        height: $height
        gender: $gender
        goal_weight: $goal_weight
        activity_level: $activity_level
        fat: $fat
        carbs: $carbs
        protein: $protein
      }
    ) {
      id
      age
      weight
      height
      gender
    }
  }
`;

export const ADD_FOOD = gql`
  mutation ADD_FOOD(
    $date: String!
    $calories: Int!
    $fat: Int!
    $carbs: Int!
    $fiber: Int!
    $protein: Int!
    $food_string: String!
    $meal_type: String!
  ) {
    createDailyRecord(
      data: {
        date: $date
        calories: $calories
        fat: $fat
        carbs: $carbs
        fiber: $fiber
        protein: $protein
        food_string: $food_string
        meal_type: $meal_type
      }
    ) {
      date
      calories
      fat
      carbs
      fiber
      protein
      food_string
      meal_type
      createdAt
    }
  }
`;

export const UPDATE_FOOD_STRING = gql`
  mutation UPDATE_FOOD_STRING($id: String!, $food_string: String!) {
    updateDailyRecord(id: $id, data: { food_string: $food_string }) {
      date
      calories
      fat
      carbs
      fiber
      protein
      food_string
      meal_type
      createdAt
    }
  }
`;

export const CREATE_WEIGHT_LOG = gql`
  mutation CREATE_WEIGHT_LOG($current_weight: Int!, $date: String!) {
    createWeightLog(data: { current_weight: $current_weight, date: $date }) {
      current_weight
      date
    }
  }
`;

export const UPDATE_WEIGHT_LOG = gql`
  mutation UPDATE_WEIGHT_LOG($id: String!, $current_weight: Int) {
    updateWeightLog(id: $id, data: { current_weight: $current_weight }) {
      current_weight
      id
    }
  }
`;

export const ADD_POST = gql`
  mutation ADD_POST($title: String!, $body: String!) {
    createPost(data: { title: $title, body: $body }) {
      id
      body
      title
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation ADD_COMMENT($postId: String!, $body: String!) {
    createComment(postId: $postId, data: { body: $body }) {
      id
      user_id
      body
      createdAt
      likeCount
    }
  }
`;

export const DELETE_FOOD_LOG_RECORD = gql`
  mutation DELETE_FOOD_LOG_RECORD($id: String!) {
    deleteDailyRecord(id: $id) {
      id
    }
  }
`;

export const UPDATE_VIEW_COUNT = gql`
  mutation UPDATE_POST($id: String!, $viewCount: Int!) {
    updatePost(id: $id, data: { viewCount: $viewCount }) {
      viewCount
    }
  }
`;

export const UPDATE_POST = gql`
  mutation UPDATE_POST($id: String!, $title: String, $body: String) {
    updatePost(id: $id, data: { title: $title, body: $body }) {
      id
      title
      body
    }
  }
`;

export const UPDATE_FOOD_LOG_RECORD = gql`
  mutation UPDATE_FOOD_LOG_RECORD(
    $id: String!
    $calories: Int
    $fat: Int
    $carbs: Int
    $protein: Int
    $food_string: String
  ) {
    updateDailyRecord(
      id: $id
      data: {
        calories: $calories
        fat: $fat
        carbs: $carbs
        protein: $protein
        food_string: $food_string
      }
    ) {
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

export const UPDATE_COMMENT = gql`
  mutation UPDATE_COMMENT($id: String!, $body: String) {
    updateComment(id: $id, data: { body: $body }) {
      id
      body
      likeCount
    }
  }
`;

export const DELETE_POST = gql`
  mutation DELETE_POST($id: String!) {
    deletePost(id: $id) {
      id
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation DELETE_COMMENT($id: String!) {
    deleteComment(id: $id) {
      id
    }
  }
`;

export const UPDATE_LIKE_COUNT = gql`
  mutation UpdateLikeCount($id: String!, $likeCount: Int) {
    updatePost(id: $id, data: { likeCount: $likeCount }) {
      id
      likeCount
    }
  }
`;
