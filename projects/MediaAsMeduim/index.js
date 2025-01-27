'use strict';

const posts = document.querySelector('#newlist');

const getData = () => {
  fetch(
    'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=1yaC2zo9D8kyUL7MkOsjTFpos7BG2Vtc',
  )
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((el) => {
        // console.log(el);

        const dateString = el.published_date;
        const date = new Date(dateString);
        const day = date.getUTCDate();
        const month = date.toLocaleString('en-US', { month: 'long' });
        const year = date.getUTCFullYear();
        const formattedDate = `${day} ${month} ${year}`;

        posts.innerHTML += `
        
          <div class="new-item" id="parentDiv">
            <div class="new-item-content">
              <div class="new-item-content-top">
                <div class="top-info">
                  <div 
                    class="image-container" 
                    style="width: 24px; height: 24px; border-radius: 30px;"
                  > 
                    <img 
                      alt="avatar-img" 
                      class="img" 
                      src="${el.multimedia[2].url}" 
                    /> 
                  </div>
                  <p class="in inter">
                    <span class="authorname">${el.byline}</span> in
                    <span class="topicname">${el.geo_facet}</span>
                  </p>
                  <p class="date">${formattedDate}</p>
                </div>
                <div class="text inter">
                  <p class="title">${el.title}</p>
                  <p class="description inter">${el.abstract}</p>
                </div>
              </div>
              <div class="new-item-content-infobuttom">
                <div class="info">
                  <button class="btn">${el.section}</button>
                  <p class="inter">12 min read</p>
                  <p class="delimeter inter">|</p>
                  <p class="inter">Selected for you</p>
                </div>
              </div>
            </div>
            <div class="image-container">
              <img 
                alt="ni-image" 
                class="img" 
                src="${el.multimedia[0].url}" 
              />
            </div>
          </div>
        `;
        document.getElementById('parentDiv').onclick = () => window.location.href = el.uri; //failed
      });
    });
};

getData();
