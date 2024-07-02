let cards={
    suit_img1:document.getElementById("card_men_suit1"),
    suit_img2:document.getElementById("card_men_suit2"),
    suit_img3:document.getElementById("card_men_suit3"),   
    btn_suit_card1:document.getElementById("btn_first_card"),
    btn_suit_card2:document.getElementById("btn_seconed_card"),
    btn_suit_card3:document.getElementById("btn_third_card"),
    btn_plus:document.getElementById("plus"),
    btn_min:document.getElementById("min"),
    input_num:document.getElementById("ini"),
    empty_img:document.getElementById("empty_img"),
    real_price1:document.getElementById("price1"),
    real_price2:document.getElementById("price2"),
    real_price3:document.getElementById("price3"),
    inner_price:document.getElementById("inner_price"),
}
cards.btn_suit_card1.onclick=function(){
    cards.real_price1.style.display="inline-block";
    cards.inner_price.appendChild(cards.real_price1);
    cards.suit_img1.style.width="40px"
    cards.suit_img1.style.height="40px"
    cards.suit_img1.style.display="block"
    cards.empty_img.appendChild(cards.suit_img1);
    cards.input_num.value=1;
    cards.input_num.style.display="inline-block";
}

cards.btn_plus.addEventListener("click" ,() =>{
    cards.input_num.value++
})
cards.btn_min.addEventListener("click" ,() =>{
    cards.input_num.value--
})

cards.btn_suit_card2.onclick=function(){
    cards.real_price2.style.display="inline-block";
    cards.inner_price.appendChild(cards.real_price2);
cards.suit_img2.style.width="40px";
cards.suit_img2.style.height="40px";
cards.suit_img2.style.display="block";
cards.empty_img.appendChild(cards.suit_img2);
cards.input_num.value=1;
cards.input_num.style.display="inline-block";

}
cards.btn_suit_card3.onclick=function(){
    cards.real_price3.style.display="inline-block";

cards.inner_price.appendChild(cards.real_price3);
cards.suit_img3.style.width="40px";
cards.suit_img3.style.height="40px";
cards.suit_img3.style.display="block";
cards.empty_img.appendChild(cards.suit_img3);
cards.input_num.value=1
cards.input_num.style.display="inline-block";
}






let casual_cards={
    casual_img1:document.getElementById("casual_card1"),
    casual_img2:document.getElementById("casual_card2"),
    casual_img3:document.getElementById("casual_card3"),
    real_c_price1:document.getElementById("real_c_price1"),
    real_c_price2:document.getElementById("real_c_price2"),
    real_c_price3:document.getElementById("real_c_price3"),
    btn_c_card1:document.getElementById("btn_c_card1"),
    btn_c_card2:document.getElementById("btn_c_card2"),
    btn_c_card3:document.getElementById("btn_c_card3"),
    btn_plus2:document.getElementById("plus2"),
    btn_min2:document.getElementById("min2"),
    input_num2:document.getElementById("ini2"),
    empty_img2:document.getElementById("empty_img2"),
    real_c_price1:document.getElementById("real_c_price1"),
    real_c_price2:document.getElementById("real_c_price2"),
    real_c_price3:document.getElementById("real_c_price3"),
    inner_price2:document.getElementById("inner_price2"),
}

casual_cards.btn_c_card1.onclick=function(){
    casual_cards.real_c_price1.style.display="inline-block";
    casual_cards.inner_price2.appendChild(casual_cards.real_c_price1);
    casual_cards.casual_img1.style.width="40px";
    casual_cards.casual_img1.style.height="40px";
    casual_cards.casual_img1.style.display="block";
    casual_cards.empty_img2.appendChild(casual_cards.casual_img1);
    casual_cards.input_num2.value=1;
    casual_cards.input_num2.style.display="inline-block";
}
casual_cards.btn_c_card2.onclick=function(){
    casual_cards.real_c_price2.style.display="inline-block";

    casual_cards.inner_price2.appendChild(casual_cards.real_c_price2);
    casual_cards.casual_img2.style.width="40px";
    casual_cards.casual_img2.style.height="40px";
    casual_cards.casual_img2.style.display="block";
    casual_cards.empty_img2.appendChild(casual_cards.casual_img2);
    casual_cards.input_num2.value=1;
    casual_cards.input_num2.style.display="inline-block";
}
casual_cards.btn_c_card3.onclick=function(){
    casual_cards.real_c_price3.style.display="inline-block";

    casual_cards.inner_price2.appendChild(casual_cards.real_c_price3);
    casual_cards.casual_img3.style.width="40px"
    casual_cards.casual_img3.style.height="40px"
    casual_cards.casual_img3.style.display="block"
    casual_cards.empty_img2.appendChild(casual_cards.casual_img3);
    casual_cards.input_num2.value=1
    casual_cards.input_num2.style.display="inline-block";
}

casual_cards.btn_plus2.addEventListener("click" ,() =>{
    casual_cards.input_num2.value++
})
casual_cards.btn_min2.addEventListener("click" ,() =>{
    casual_cards.input_num2.value--
})

let resetbtn1= document.getElementById("reset1");
let resetbtn2= document.getElementById("reset2");
resetbtn1.onclick=function(){
    cards.suit_img1.style.display="none";
    cards.suit_img2.style.display="none";
    cards.suit_img3.style.display="none";
    cards.real_price1.style.display="none";
    cards.real_price2.style.display="none";
    cards.real_price3.style.display="none";
    cards.input_num.style.display="none"
}
resetbtn2.onclick=function(){
casual_cards.casual_img1.style.display="none";
casual_cards.casual_img2.style.display="none";
casual_cards.casual_img3.style.display="none";
casual_cards.real_c_price1.style.display="none";
casual_cards.input_num2.style.display="none";
casual_cards.real_c_price2.style.display="none";
casual_cards.real_c_price3.style.display="none";
}