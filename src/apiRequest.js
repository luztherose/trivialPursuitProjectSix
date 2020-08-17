import React, { Component } from 'react';
import Axios from 'axios';
function init() {

    async function getQuestions(category, amount) {
        //this line modify the url if the category selected is "any"
        const categoryParam = (category !== "Any") ? `&category=${category}` : ""
        return Axios({
            url: `https://opentdb.com/api.php?amount=${amount}${categoryParam}`,
        })
    }

    return {
        getQuestions,
    };
}

export default init();