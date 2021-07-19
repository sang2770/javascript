//*AJAX ý nghĩa là thực hiện load một phần trang web khi nó thay đổi nhưng không cần load lại cả trang

//! các bước thực hiện
//TODO 1: Tạo một đối tượng XMLHTTPRequest object
let request=new XMLHttpRequest();
//TODO 2: mở một phương thức thực hiện
request.open("GET", "./extentions.txt");
//TODO 3: gửi yêu cầu
request.send();
//TODO 4: sau khi kết quả trả về thực hiện các phương thức
request.onload=function(){
    if(request.status!=200)
    {
        console.log(`ERRR: ${request.status} - ${request.statusText}`);
    }
    else{
        console.log(`Done, ${request.response.length}`);

    }
    console.log(request.response);
}
request.onprogress = function(event) {
    if (event.lengthComputable) {
      console.log(`Received ${event.loaded} of ${event.total} bytes`);
    } else {
        console.log(`Received ${event.loaded} bytes`); // no Content-Length
    }
  
  };
request.onerror=()=>{
    console.log("Request failded");
}
