import { createSlice } from '@reduxjs/toolkit';

let visitedPath = [];  
    
for (let i = 0; i < 20; i++) {
    visitedPath[i] = []; 
    for (let j = 0; j < 20; j++) {
        visitedPath[i][j] = 0; 
    }
}

const pathSlice = createSlice({
    name: 'path',
    initialState: {
        path: visitedPath, 
    },
    reducers: {
        addPath: (state, action) => {
            const[newPath,type]=action.payload          
                for(let i=0;i<newPath.length;i++){
                    state.path[newPath[i].row][newPath[i].col]=type
                }
        },
    },
});


export const { addPath } = pathSlice.actions;
export default pathSlice.reducer;