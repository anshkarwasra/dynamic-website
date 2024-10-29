
function createBox(vidTitle,thumbnail,views,monthsOld,channelName,duration){
    let box = document.createElement('div');
    box.className = "box";
    views = Intl.NumberFormat("en", {notation: "compact"}).format(views) //output - "234K"
    box.innerHTML = `
            <div class="img"><img src="${thumbnail}" alt="">
            <span>${duration}</span>
            </div>
            <div class="content">
                <h1>${vidTitle}</h1>
                <ul>
                <p>${channelName}</p>
                    <li>${views}</li>
                    <li>${monthsOld}months ago</li>
                </ul>
            </div>
    `;
    box.style.marginTop = "20px";
    document.querySelector(".container").appendChild(box);
}




createBox("Lies of P  gameplay(no comentery)|R3BEL","riccardo-trimeloni-lc5iIZ7UO1w-unsplash(1).jpg",45000000,7,"R3BEL","34:30");