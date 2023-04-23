export const initialState={
    user:null,
    playlists:[],
    playing: false,
    item: null,
    // token:'BQDRq7G25m_eTygn5PmtN9wsY4fylHrt2bus9gG3Mo3ZRqyX1uY_lUjT76c4ygIxWwpJ8AxrHs5EeYt49QXZDUgVXjZVdOugJck7sVGzlcol-bdanr53hvUl7w-bfES1SG9xQzjoSBR9wIBH4XFMIP1Npn95s0ihcBj5k0M0kRZZQe4j-PSo0ftk2Y2Hh-MoeXzu-cLC3pJ4vPl5EVwUkw',

};

 export const reducer=(state, action)=>{
console.log(action);

switch(action.type){
    case 'SET_USER':
     return{
        ...state, 
        user: action.user 
     };

     case 'SET_TOKEN':
        return{
            ...state,
            token:action.token
        };
      case "SET_PLAYLISTS":
        return{
            ...state,
            playlists: action.playlists,
        };

      case "SET_DISCOVER_WEEKLY":  
      return{
        ...state,
        discover_weekly: action.discover_weekly,
      }

     default:
        return state;
}
}

// export default reducer;