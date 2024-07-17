const url = new URL(
    `https://stargolf.info/API_TEST/get_tasks.php?limit=101`
  );
  let dataList = [];
  let showList = []
  let m = 0



  const getData = async () => {
    // 데이터 받아서 랜더링하는 공통부분
    try {
      const response = await fetch(url);
      console.log(response);
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const data = await response.json(); // json은 파일 형식중 하나
      if (response.status === 200) {
        data.forEach;
        dataList = data.data;
        console.log('news', dataList);
        showRender();
      } else {
        // throw new Error(data.message);
        console.log('rrr', response.status);
        throw new Error(data.message || 'Failed to fetch data');
      }
    } catch (error) {
      console.error;
    }
  };
  getData()

const showRender = () => {
    
    showList = dataList.filter((e)=>{
        return e.wr_1 == "공연"
    })
    
    console.log("리스트",showList)

    let showHTML = showList.map(show=>
        `<div class="col">
            <div id="show-img">
                <img class="show-img-size" src=${show.wr_link1} onerror="this.onerror=null; this.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUnvISVTYopMAy17o3mB2lfSPeEjoKfAdV2w&s';">
            </div>
            <div class="show-exp">
                <div id="show-title">
                    <h4>${show.wr_subject}</h4>
                </div>
                <div id="show-time">
                    <p>${showTime(show)}</p>
                </div>
                <div id="show-address">
                    <p>address: ${showAddress(show)}</p>
                </div>
            </div>
        </div>`    
    ).join('')

    document.getElementById("show-box").innerHTML = showHTML
}


const showTime = (show)=>{
    let arr = ""
    arr = show.wr_4
    if(arr == ""){
        return show = "unknown"
    }else{
        if(arr.length > 20){
            return arr = `time: ${arr.substring(0,15) + "..."}`
        }else{
            return arr = `time: ${arr}` 
        }

    }
} 

const showAddress = (show) =>{
    let arr1 = ""
    arr1 = show.wr_6
    if(arr1.length > 20){
        return arr1.substring(0,15) + "..."
    }else{
        return arr1 
    }
}

const contentOnoff = () =>{
    console.log(m)
    if(m == 1){
        showRender()
        m -=1
    }else{
        showList = dataList.filter((e)=>{
            return e.wr_1 == "공연"
        })
        
        console.log("리스트",showList)
    
        let showHTML = showList.map(show=>
            `<div class="col">
                <div id="show-img">
                    <img class="show-img-size" src=${show.wr_link1} onerror="this.onerror=null; this.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUnvISVTYopMAy17o3mB2lfSPeEjoKfAdV2w&s';">
                </div>
                <div class="show-exp">
                    <div id="show-title">
                        <h4>${show.wr_subject}</h4>
                    </div>
                    <div id="show-time">
                        <p>${showTime(show)}</p>
                    </div>
                    <div id="show-address">
                        <p>address: ${showAddress(show)}</p>
                    </div>
                    ${show.wr_content}
                </div>
            </div>`    
        ).join('')
    
        document.getElementById("show-box").innerHTML = showHTML
    
        m += 1
    }

    
}
