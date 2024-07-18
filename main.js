*{
    margin: 0;
}
body{
    background-color: #afafaf;
}
.show-img-size{
    max-width: 500px;
    height: 200px;
}
#show-img{
    display: flex;
    justify-content: center;
}
#show-box{
    margin: 10px 1em;
    padding: 1em;
    border-radius: 20px;
    background-color: white;
    border: 3px solid rgb(67, 252, 252);
}
.col{
    background-color: white;
    margin: 0.5em;
    border-radius: 20px;
    transition: 0.3s;
    border: 2px solid rgba(0, 0, 0, 0);
}
.col:hover{
    transition: 0.3s;
    transform: scale(1.01);
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}
#show-img{
    margin: 1em 0;
}
.show-exp{
    background-color:  rgb(202, 248, 248);
    margin: 0 1em;
    padding: 20px 1em;
    border-radius: 20px;
}
#pop-box{
    display: none;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 1;
    width: 85vw;
    height: 85vh;
    border: 5px solid rgb(67, 252, 252);
    border-radius: 20px;
    background-color: rgb(0, 0, 0);
}
.Exit{
    position: relative;
    left: 95%;
    top: 2%;
    border: none;
    background-color: rgb(0,0,0,0);
    font-size: 44px;
    font-weight: bold;
    color: white;
}
@media screen and (max-width:48rem) {
    .show-img-size{
        width: 55vw;
        height: 35vw;
    }
    .Exit{
        left: 85%;
        top: 1%;
    }
    
}
