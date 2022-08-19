const form =document.getElementById("generate_form");
const downloadButton=document.getElementById("downloadButton");
const QrCodeBox=document.getElementById("QRCodeBox");






const GenerateQRCode =(url)=>{
 

    QrCodeBox.innerHTML='';

    if(screen.width > 500){

        var qrcode = new QRCode(QrCodeBox, {
            text: url,
            width: 500,
            height: 500,
            colorDark : "#ffffff",
            colorLight : "#2C7DFA",
           
        });

       
    }else{

        var qrcode = new QRCode(QrCodeBox, {
            text: url,
            width: screen.width-50,
            height: screen.width-50,
            colorDark : "#ffffff",
            colorLight : "#2C7DFA",
           
        });
    }

   

}



const OnGenerateSubmit= (event)=>{

    event.preventDefault();

    const Url= document.getElementById("url").value;
   
    

    if (Url ==="") {
        alert("Please enter a URL")
        
    }else{
     GenerateQRCode(Url);
    }
}


const OnDownloadButtonClick= ()=>{


    var QrImageURL=QrCodeBox.querySelector('img').src;


    downloadButton.href = QrImageURL;
    downloadButton.download = 'qrcode';


    

}


form.addEventListener('submit',OnGenerateSubmit);

downloadButton.addEventListener('click',OnDownloadButtonClick)




if(screen.width > 550){
    GenerateQRCode("https://github.com/Elmountahiii",500);


} else{
    GenerateQRCode("https://github.com/Elmountahiii",screen.width-50);

}
