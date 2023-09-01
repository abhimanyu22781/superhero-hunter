*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'orbitron'
}

/* Utility Classes */
.flex{
    display:flex;
}
.f-c{
    flex-direction:column;
}
.a-c{
    align-items: center;
}
.a-s{
    align-items:flex-start;
}
.j-s{
    justify-content:flex-start;
}
.j-c{
    justify-content: center;
}
.j-sb{
    justify-content: space-between;
}

/* Defining variables for colors */
:root{
    --pure:#fff;
    --dark:#000;
    --list-background:rgba(255, 255, 255,.5);
    --listHover:rgba(255, 255, 255,.7);
    --theme:rgb(255,0,0);
    --addBtn:rgb(73, 73, 73);
    --addBtnHover:rgba(158, 158, 158, 0.7);
}

body{
    min-height:100vh;
    display:flex;
    justify-content: center;
    align-items:center;
}

/********* Background  *********/
.box{
    width:100%;
    min-height:100vh;
    position:relative;
    overflow:hidden;
}
.box img{
    position:absolute;
    top:0;
    left:0;
    z-index:9;
}

/****** SearchBar ********/
.searchbar{
    position:absolute;
    top:70%;
    left:15%;
    z-index:12;
    width:auto;
    display:flex;
    justify-content:right;
    align-items:end;
}
.searchbar input[type="text"]{
    width:300px;
    height:30px;
    background:transparent;
    border-top:0;
    border-right:0;
    border-left:0;
    border-bottom:2px solid var(--pure);
    outline:none;
    color:var(--pure);
    font-size:18px;
    letter-spacing: 2px;
    display:flex;
    align-items:flex-end;
}
.searchbar input[type="text"]::placeholder{
    font-size:20px;
    color:var(--pure);
    display:flex;
    align-items: flex-end;
    justify-content: right;
}
.searchBtn{
    width:6.5rem;
    height:30px;
    background:var(--pure);
    color:var(--dark);
    font-size:18px;
    font-weight:600;
    border:2px solid var(--pure);
    padding:.2rem;
    cursor:pointer;
    transition:all .2s ease-in-out;
    display:inline-block;
}
.searchBtn:hover{
    background:transparent;
    color:var(--pure);
}

/****** Favourite Page Link *******/
.favBtn{
    position:absolute;
    top:10%;
    left:10%;
    z-index:12;
    overflow:hidden;
}
.favBtn a{
    text-decoration: none;
    color:var(--pure);
    font-size:1.5rem;
    letter-spacing: 1px;
    position:relative;
}
.favBtn a::before{
    content:'';
    position:absolute;
    width:100%;
    height:2px;
    background: var(--theme);
    bottom:0;
    left:-100%;
    z-index:13;
    transition:all .2s ease-in-out;
}
.favBtn a:hover::before{
    left:0;
}



/******** Search List ***********/
.searchList{
    width:600px;
    max-height:20rem;
    position:absolute;
    z-index:14;
    background:var(--list-background);
    border-radius:.2rem;
    padding:.5rem;
    overflow:hidden;
    overflow-y:scroll;
    display:none;
}
.searchList ul{
    width:100%;
    height:auto;
    overflow-y:scroll;
}
.searchList::-webkit-scrollbar{
    width:2px;
}
.searchList:-webkit-scrollbar-track {
    background: var(--list-background);
  }
.searchList::-webkit-scrollbar-thumb {  
    background: var(--pure);
}
.searchList::-webkit-scrollbar-thumb:hover {
    background: var(--dark);
}
.searchList ul::-webkit-scrollbar{
    display:none;
}

.searchList li{
    width:100%;
    height:3rem;
    list-style:none;
    font-size:1.2rem;
    font-weight:500;
    padding: 0 1rem;
    margin:.2rem 0;
    border-radius: .2rem;
    transition:all .22s ease-in-out;
}
.searchList li:hover{
    height:6rem;
    background:var(--listHover) ;
}

.searchList li .addFav{
    background:transparent;
    border:none;
    outline:none;
    cursor:pointer;
    padding:.5rem;
    border-radius:.2rem;
    transition:all .2s ease-in-out;
}
.searchList li .addFav .addFavi{
    font-size:1.2rem;
    color:var(--addBtn);
}
.searchList li .addFav:hover{
    background:var(--addBtnHover);
}
.searchList li .addFav:hover .addFavi{
    color:var(--dark);
}

.searchList .left{
    cursor:pointer;
}
.searchList .left .charName{
    max-width:80%;
    margin-left:1rem;
    transition:all .2s ease-in-out;
}
.searchList .left img{
    width:40px;
    height:40px;
    border-radius:.2rem;
    transition:all .2s ease-in-out;
}
.searchList li:hover .left img{
    width:70px;
    height:70px;
}
.searchList li:hover .charName{
    font-size:1.5rem;
}
.searchList li:hover .addFav{
    padding:.5rem;
}

/******** If no item in Search List ********/
.notFound{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    font-weight:600;
    font-size:1.2rem;
    display:none;

}

/********* Mute Unmute Background Video *********/
.unmuteBtn{
    position:absolute;
    z-index:13;
    left:2rem;
    bottom:2rem;
    background:transparent;
    border:none;
    outline:none;
    cursor:pointer;
}
.unmuteBtn .unmuteBtni{
    background:transparent;
    color:var(--pure);
}


/********* Characters List for Home Page *********/
.charList{
    width:44%;
    max-height:75vh;
    position:absolute;
    z-index:14;
    background:var(--list-background);
    border-radius:.2rem;
    padding:.5rem;
    overflow:hidden;
    overflow-y:scroll;
    top:15%;
    right:10%;
}
.charList::-webkit-scrollbar{
    width:5px;
}
.charList:-webkit-scrollbar-track {
    background: var(--list-background);
}
.charList::-webkit-scrollbar-thumb {
    background: var(--pure);
    border-radius:2.5px;
}
.charList::-webkit-scrollbar-thumb:hover {
    background: var(--dark);
}
.charListUl{
    width:100%;
    height:100%;
    display:flex;
    flex-wrap:wrap;
}
.char{
    width:170px;
    height:300px;
    margin:1rem;
    background:var(--listHover) ;
    border-radius:.2rem;
    list-style:none;
}
.char .img{
    width:100%;
    height:60%;
}
.char .img .charImg{
    width:100%;
    height:100%;
    border-radius:.2rem;
}
.char .details{
    text-align: center;
    padding:.7rem;
}
.char .details .name{
    
    color:var(--theme);
    font-size:1rem;
    padding-bottom:.3rem;
    font-weight:500;
}
.char .details .series, .char .details .comics{
    font-size:.8rem;
    letter-spacing:1px;
    line-height:1.2rem;
}


/********* Show/Hide List Button *********/
.showHideList{
    position:absolute;
    top:10%;
    right:10%;
    color:var(--pure);
    z-index:14;
    background:transparent;
    border:none;
    cursor:pointer;
    font-size:1.3rem;
    letter-spacing: 2px;
    transition:all .3s ease-in-out;
}
.showHideList:hover{
    border-right:10px solid var(--theme);
    padding-left:.7rem;
}


/* Media Query for width less than 710px */
@media screen and (max-width: 710px) {
    .searchList{
        width:95%;
    }
    .searchList li{
        font-size:.9rem;
    }
    .searchList li:hover .charName{
        font-size:1.1rem;
    }
    .favBtn a{
        font-size:1.2rem;
    }
    .showHideList{
        font-size:1.2rem;
    }
    .searchbar input[type="text"]{
        width:230px;
        color:var(--pure);
        font-size:.9rem;
        letter-spacing: 1px;
    }
    .searchbar input[type="text"]::placeholder{
        font-size:1rem;
    }
    .searchBtn{
        width:6rem;
        font-size:1rem;
    }
}


/* Media Query for width less than 510px */
@media screen and (max-width: 510px) {
    .searchList li{
        font-size:.8rem;
    }
    .searchList li:hover .charName{
        font-size:1rem;
    }
    .favBtn a{
        font-size:1rem;
    }
    .showHideList{
        font-size:1rem;
    }
}
