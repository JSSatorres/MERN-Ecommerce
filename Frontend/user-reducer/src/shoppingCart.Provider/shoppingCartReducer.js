// import React from 'react'
import {ADD_TO_CART, REMOVE_ALL_FROM_CART,REMOVE_TO_CART,CLEAR_CART}from "./shoppingCartTypes"

export const productsOnItialState =[]



export const productsOnReducer = (state,action)=>{
    switch(action.types){
        case ADD_TO_CART:{

        }
        case REMOVE_TO_CART:{

        }
        case REMOVE_ALL_FROM_CART:{

        }
        case CLEAR_CART:{

        }
        default:{
            return state;
        }
    }

}