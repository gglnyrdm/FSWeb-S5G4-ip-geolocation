//axios import buraya gelecek
import axios from 'axios';
var benimIP;


// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl(){
	await axios({
		method: 'get',
		url: 'https://apis.ergineer.com/ipadresim',
	})
	.then(function (response) {
		return response.data
	})
	.then(function (a) {
		benimIP=a
	});
}				
// ------------ değiştirmeyin --------------


/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>

	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/
const geoapiPromise = axios.get("https://apis.ergineer.com/ipgeoapi/178.233.21.68");

geoapiPromise.then((respo) => {
	console.log(respo.data);
})
/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/
const newComponent = (nesne) => {
	const cardDiv = document.createElement("div");
	cardDiv.setAttribute("class","card");
	cards.append(cardDiv);

	const img = document.createElement("img");
	img.src = nesne.ülkebayrağı;
	cards.append(img);

	const infoDiv = document.createElement("div");
	infoDiv.setAttribute("class", "card-info");
	cards.append(infoDiv);

	const h3 = document.createElement("h3");
	h3.setAttribute("class", "ip");
	h3.textContent = `${sorgu}`;
	infoDiv.append(h3);

	const pUlke =document.createElement("p");
	pUlke.setAttribute("class", "ulke");
	pUlke.textContent = `${ülke} (${ülkeKodu})` ;
	infoDiv.append(pUlke);

	const enBoyP = document.createElement("p");
	enBoyP.textContent = `Enlem : ${enlem} Boylam : ${boylam}`;
	infoDiv.append(enBoyP);

	const sehirP = document.createElement("p");
	sehirP.textContent = `Şehir : ${şehir} `;
	infoDiv.append(sehirP);

	const saatP = document.createElement("p");
	saatP.textContent = `Saat dilimi : ${saatdilimi}`;
	infoDiv.append(saatP);

	const paraP = document.createElement("p");
	paraP.textContent = `Para birimi : ${parabirimi}`;
	infoDiv.append(paraP);

	const ispP = document.createElement("p");
	ispP.textContent = `ISP : ${isp}`;
	infoDiv.append(ispP);

return cardDiv;
}
const kart = document.getElementsByClassName("cards")[0];
/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/
const geoapiData = respo.data;
geoapiData.forEach((nesne) => {
	kart.append(newComponent(nesne));
});
/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/



//kodlar buraya gelecek