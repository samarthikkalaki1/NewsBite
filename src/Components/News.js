import React, { Component } from 'react'
import CategoryNavbar from './CategoryNavbar';

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {
  
//   articles = [
//     {
//         "source": {
//             "id": null,
//             "name": "CBS Sports"
//         },
//         "author": "Dayn Perry",
//         "title": "World Series score, takeaways: Astros rebound in Game 2 vs. Phillies behind big first inning, Framber Valdez - CBS Sports",
//         "description": "The 2022 World Series is tied, 1-1, after Houston's Game 2 win",
//         "url": "https://www.cbssports.com/mlb/news/world-series-score-takeaways-astros-rebound-in-game-2-vs-phillies-behind-big-first-inning-framber-valdez/live/",
//         "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/10/30/aa559f26-1a14-47bc-88ca-d3343f48281d/thumbnail/1200x675/26e918122f53d2c0e12f173ee9465a01/astros-altuve-getty-1.png",
//         "publishedAt": "2022-10-30T10:00:00Z",
//         "content": "For the second time in the 2022 World Series, the Houston Astros barged to a 5-0 lead over the Philadelphia Phillies. In contrast with the taut and stunning Game 1, however, the Astros in Saturday ni… [+5949 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "TMZ"
//         },
//         "author": "TMZ Staff",
//         "title": "'SNL' Star Chris Redd Injury Photos From Brutal Attack - TMZ",
//         "description": "Chris Redd's face looks swollen and bruised after being attacked in NYC.",
//         "url": "https://www.tmz.com/2022/10/30/chris-redd-attack-injury-photos-brass-knuckles/",
//         "urlToImage": "https://imagez.tmz.com/image/45/16by9/2022/10/28/457991ccf8d448f5b383e6a7764f055f_xl.jpg",
//         "publishedAt": "2022-10-30T09:00:00Z",
//         "content": "'SNL' alum Chris Redd is smiling through the pain after being attacked in New York City ... his nose is stitched up and his eyes are swollen and bruised.\r\nTMZ obtained these photos of the injuries Ch… [+706 chars]"
//     },

//     {
//         "source": {
//             "id": "usa-today",
//             "name": "USA Today"
//         },
//         "author": "Simon Samano",
//         "title": "Jake Paul after beating Anderson Silva: 'Dana White can suck this d*ck' - MMA Junkie",
//         "description": "Jake Paul went THERE with his message to Dana White after his win over Anderson Silva.",
//         "url": "https://mmajunkie.usatoday.com/2022/10/jake-paul-nsfw-message-dana-white-after-anderson-silva-win",
//         "urlToImage": "https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2022/10/jake-paul-post-fight.jpg?w=1000&h=576&crop=1",
//         "publishedAt": "2022-10-30T07:45:00Z",
//         "content": "GLENDALE, Ariz. Jake Paul did something that UFC president Dana White guaranteed he wouldn’t do: He called out Anderson Silva.\r\nNot only did Paul call out the former UFC middleweight champion, he bea… [+2280 chars]"
//     },
//     {
//         "source": {
//             "id": "cnn",
//             "name": "CNN"
//         },
//         "author": "Heather Chen, Adrienne Vogt, Matt Meyer, Sophie Jeong, Gawon Bae, Andrew Raine",
//         "title": "At least 151 killed in Seoul Halloween crowd surge: Live updates - CNN",
//         "description": "At least 151 people, including 19 foreign nationals, are now reported to have been killed during an incident at Halloween festivities in Seoul, according to fire authorities. Follow here for live news updates.",
//         "url": "https://www.cnn.com/asia/live-news/seoul-south-korea-halloween-deaths/index.html",
//         "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221030024505-02-seoul-stampede-103022.jpg?c=16x9&q=w_800,c_fill",
//         "publishedAt": "2022-10-30T06:22:00Z",
//         "content": "While investigators continue to piece together the exact chain of events that led to the deaths of at least 151 people during an apparent crowd surge in the Itaewon district of Seoul on Saturday nigh… [+1799 chars]"
//     },
//     {
//         "source": {
//             "id": "reuters",
//             "name": "Reuters"
//         },
//         "author": null,
//         "title": "Somalia president: at least 100 people killed in car bombs - Reuters",
//         "description": "At least 100 people were killed and 300 injured in two car bombs that exploded outside the education ministry in Somalia's capital Mogadishu on Saturday, the country's president said in a statement early on Sunday.",
//         "url": "https://www.reuters.com/world/africa/somalia-president-least-100-people-killed-car-bombs-2022-10-30/",
//         "urlToImage": "https://www.reuters.com/resizer/Xi-otjx4Jl9_d8zTOZdK92JEHpg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HP5MNLOJ5ZJN5NKDB46U4CWF7Y.jpg",
//         "publishedAt": "2022-10-30T04:02:00Z",
//         "content": "MOGADISHU, Oct 30 (Reuters) - At least 100 people were killed and 300 injured in two car bombs that exploded outside the education ministry in Somalia's capital Mogadishu on Saturday, the country's p… [+1434 chars]"
//     },
  
//     {
//         "source": {
//             "id": null,
//             "name": "Nintendo Life"
//         },
//         "author": "Liam Doolan",
//         "title": "Liam Hemsworth To Replace Henry Cavill In Witcher's Netflix Series - Nintendo Life",
//         "description": "Toss a coin to your new Witcher",
//         "url": "https://www.nintendolife.com/news/2022/10/liam-hemsworth-to-replace-henry-cavill-in-witchers-netflix-series",
//         "urlToImage": "https://images.nintendolife.com/6932e12771c3a/1280x720.jpg",
//         "publishedAt": "2022-10-30T03:30:00Z",
//         "content": "Image: Netflix\r\nThe Witcher Netflix series based on Andrzej Sapkowski's best-selling books, and drawing some inspiration from CD Projekt Red's video games, has announced a major change for Season 4.\r… [+2412 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Fox Business"
//         },
//         "author": "Ken Martin",
//         "title": "Here are the winning numbers in Saturday's $825M Powerball drawing - Fox Business",
//         "description": "Saturday night's Powerball jackpot is an estimated $825 million, the second largest in the game's history, the cash value, is an estimated $410.2 million.",
//         "url": "https://www.foxbusiness.com/lifestyle/here-are-the-winning-numbers-in-saturdays-825m-powerball-drawing",
//         "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/10/0/0/PB-2.jpg?ve=1&tl=1",
//         "publishedAt": "2022-10-30T02:06:24Z",
//         "content": "Saturday's Powerball jackpot has a grand prize of $825 million.\r\nIf a potential winner takes the cash option, its worth approximately $410.2 million.\r\nIt's the second largest Powerball jackpot ever a… [+1871 chars]"
//     },
//     {
//         "source": {
//             "id": "the-wall-street-journal",
//             "name": "The Wall Street Journal"
//         },
//         "author": "Ann M. Simmons, Jared Malsin, Isabel Coles",
//         "title": "Russia Moves to Pull Out of Ukraine Grain Deal After Blasts Hit Crimean Port - The Wall Street Journal",
//         "description": "Moscow cites attack on occupied Black Sea city of Sevastopol",
//         "url": "https://www.wsj.com/articles/blasts-hit-crimean-port-where-russian-fleet-is-based-11667048899",
//         "urlToImage": "https://images.wsj.net/im-654649/social",
//         "publishedAt": "2022-10-30T01:09:00Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Pff.com"
//         },
//         "author": "Nathan Jahnke",
//         "title": "NFL Week 8 Positional Fantasy Football Rankings 3.0 | Fantasy Football News, Rankings and Projections - Pro Football Focus",
//         "description": "PFF's Nathan Jahnke reveals the third version of his NFL Week 8 fantasy football rankings.",
//         "url": "https://www.pff.com/news/fantasy-football-nfl-week-8-positional-rankings-3-0",
//         "urlToImage": "https://media.pff.com/2022/09/Jalen-Hurts-1.jpg?w=956&h=538",
//         "publishedAt": "2022-10-30T00:40:50Z",
//         "content": "<ul><li>Christian McCaffrey back near the top: The former Panther is a must-start now that hes been a 49er for a full week despite the poor matchup.</li><li>DeAndre Hopkins returns to fantasy startin… [+941 chars]"
//     },
//     {
//         "source": {
//             "id": "reuters",
//             "name": "Reuters"
//         },
//         "author": null,
//         "title": "Man arrested in attack on Nancy Pelosi's husband faces charges - Reuters",
//         "description": "The man who clubbed U.S. House Speaker Nancy Pelosi's husband in the head with hammer, shouting \"Where is Nancy?\" after forcing his way into the couple's San Francisco home, faced charges of attempted murder and other felonies a day later.",
//         "url": "https://www.reuters.com/world/us/man-arrested-attack-us-house-speaker-pelosis-spouse-faces-charges-2022-10-29/",
//         "urlToImage": "https://www.reuters.com/resizer/hCaJ1NY8i-fFlUmwfftPKzfbzZU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/O2BWBC6BSRILVKACDSJJ34HPYU.jpg",
//         "publishedAt": "2022-10-29T23:30:00Z",
//         "content": "SAN FRANCISCO, Oct 29 (Reuters) - The man who clubbed U.S. House Speaker Nancy Pelosi's husband in the head with hammer, shouting \"Where is Nancy?\" after forcing his way into the couple's San Francis… [+6297 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "NPR"
//         },
//         "author": "",
//         "title": "Your Halloween plans may need to change thanks to scary weather predictions - NPR",
//         "description": "Forecasters predict that heavy rainfall this Halloweekend will make trick-or-treating a no go in drought-stricken parts of the country.",
//         "url": "https://www.npr.org/2022/10/29/1132625890/halloween-weather-forecasts-trick-or-treating",
//         "urlToImage": "https://media.npr.org/assets/img/2022/10/29/gettyimages-155081794_wide-89c7aff91969c866ad3a06af33346b70354991a5-s1400-c100.jpg",
//         "publishedAt": "2022-10-29T22:30:53Z",
//         "content": "A family goes trick or treating in Fort Greene, Brooklyn, in 2012.\r\nJemal Countess/Getty Images\r\nHeavy rain and thunderstorms could literally dampen trick-or-treating this Halloween. \r\nMeteorologists… [+2174 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Vulture"
//         },
//         "author": "Jason P. Frank",
//         "title": "Best Celebrity Halloween Costumes 2022: Lizzo, Kylie Jenner - Vulture",
//         "description": "Here’s what celebrities like Lizzo, Kylie Jenner, Ariana Grande, Megan Thee Stallion, Doja Cat, and Jennifer Garner wore for Halloween 2022.",
//         "url": "http://www.vulture.com/2022/10/celebrity-halloween-costumes.html",
//         "urlToImage": "https://pyxis.nymag.com/v1/imgs/13d/104/3c04989345295469b2cc78a99562742b55-michael-myers.1x.rsocial.w1200.jpg",
//         "publishedAt": "2022-10-29T22:30:00Z",
//         "content": "Halloween is one of our annual great moments in celebrity culture. You learn more about a celebrity through their Halloween-costume choice than anything else. As a since-canceled celeb once said, Hal… [+1601 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Forbes"
//         },
//         "author": "David Axe",
//         "title": "The Russian Black Sea Fleet May Have Lost Another Flagship - Forbes",
//         "description": "The Black Sea Fleet isn’t safe in the western Black Sea. It isn’t safe in Sevastopol. The only place it might be safe is the only place where it’s totally irrelevant to the wider war: in ports in Russia proper.",
//         "url": "https://www.forbes.com/sites/davidaxe/2022/10/29/the-russian-black-sea-fleet-may-have-lost-another-flagship/",
//         "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/635d9c841d5e743385046ff7/0x0.jpg?format=jpg&crop=3405,1596,x0,y212,safe&width=1200",
//         "publishedAt": "2022-10-29T21:43:26Z",
//         "content": "'Admiral Makarov.'\r\nWikimedia Commons\r\nThe Ukrainian navy for months has been hunting the Russian navy frigate Admiral Makarov. It seems the Ukrainians finally got a shot at the 409-foot, missile-arm… [+6216 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Bitcoinist"
//         },
//         "author": null,
//         "title": "\"Not Interested In Metaverse In The Current Scenario, Say Silicon Valley CEOs - Bitcoinist",
//         "description": "The metaverse has been receiving more attention in recent events. Several projects have emerged due to the growing number of fans in the space.",
//         "url": "https://bitcoinist.com/not-interested-in-metaverse-say-silicon-valley-ceos/",
//         "urlToImage": "https://bitcoinist.com/wp-content/uploads/2022/10/virtual-reality-g85578d66c_1280.jpg",
//         "publishedAt": "2022-10-29T21:42:23Z",
//         "content": "The metaverse has been receiving more attention in recent events. Several projects have emerged due to the growing number of fans in the space.\r\nHowever, some CEOs from tech companies have expressed … [+2745 chars]"
//     },
//     {
//         "source": {
//             "id": "cbs-news",
//             "name": "CBS News"
//         },
//         "author": "Sophie Reardon",
//         "title": "6 injured in \"targeted shooting\" outside Pittsburgh church during funeral; 2 arrested - CBS News",
//         "description": "The shooting occurred during a funeral for a 20-year-old man who had recently been shot and killed, police said.",
//         "url": "https://www.cbsnews.com/news/pittsburgh-funeral-shooting-6-hurt-2-teens-arrested/",
//         "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2022/10/28/e6c8d992-3c9c-4fd2-8b11-cb05ecc0fc26/thumbnail/1200x630/9b003d59755d6717af77d93402fe61b3/pittsburgh-funeral-shooting.png",
//         "publishedAt": "2022-10-29T21:39:00Z",
//         "content": "Public safety provides update on funeral shooting \r\nPublic safety provides update on funeral shooting05:54\r\nSix people were injured in a shooting outside of a Pittsburgh church where a funeral was be… [+2646 chars]"
//     },
//     {
//         "source": {
//             "id": "nbc-news",
//             "name": "NBC News"
//         },
//         "author": "Minyvonne Burke",
//         "title": "D.C. school bus driver charged with DUI after allegedly crashing into a ditch, injuring 9 students - NBC News",
//         "description": "A school bus driver in D.C. was charged with driving while intoxicated after police said he crashed into a ditch, injuring nine children returning from a field",
//         "url": "https://www.nbcnews.com/news/us-news/dc-school-bus-driver-charged-dui-allegedly-crashing-ditch-injuring-9-s-rcna54676",
//         "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2022-10/221029-murch-elementary-school-mjf-1517-9c579a.jpg",
//         "publishedAt": "2022-10-29T19:53:55Z",
//         "content": "A school bus driver in D.C. was charged with driving while intoxicated after police said he crashed into a ditch, injuring nine children returning from a field trip.\r\nTroy Reynolds, 48, was taking st… [+1852 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Courier Journal"
//         },
//         "author": ", The Courier-Journal",
//         "title": "Kentucky football vs. Tennessee: UK fans paint UT's 'The Rock' blue - Courier Journal",
//         "description": "Before No. 19 Kentucky football's game vs. No. 3 Tennessee, UK fans made their presence felt in Knoxville by taking over a landmark on UT's campus.",
//         "url": "https://www.courier-journal.com/story/sports/college/kentucky/2022/10/29/kentucky-football-tennessee-the-rock-painted-blue-uk-vols/69602704007/",
//         "urlToImage": "https://www.gannett-cdn.com/presto/2022/10/29/PLOU/0c97084f-9b1b-4e3f-8623-9ad043b6f71a-the_rock_2.png?auto=webp&crop=947,533,x510,y46&format=pjpg&width=1200",
//         "publishedAt": "2022-10-29T19:50:28Z",
//         "content": "Kentucky football fans made their presence felt in Knoxville, Tennessee, before the No. 19 Wildcats' showdown with the No. 3 Volunteers on Saturday night.\r\nA group of UK fans laid claim to \"The Rock,… [+1562 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "CoinDesk"
//         },
//         "author": "Omkar Godbole",
//         "title": "Dogecoin Replaces Cardano as 6th Largest Cryptocurrency - CoinDesk",
//         "description": "DOGE’s market cap currently exceeds that of Cardano and more than 120 members of the S&P 500.",
//         "url": "https://www.coindesk.com/business/2022/10/29/dogecoin-replaces-cardano-as-6th-largest-cryptocurrency/",
//         "urlToImage": "https://www.coindesk.com/resizer/J1wwpZex3vdpoEWOu5vKEWGTePk=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/GP5LMJFHYZHRNHSMUJYGUAVPE4.png",
//         "publishedAt": "2022-10-29T19:29:00Z",
//         "content": "Lately Dogecoin (DOGE) has been behaving more like a greyhound and less like the Shiba Inu that represents the meme-based cryptocurrency.\r\nThe price of DOGE has increased 150% from $0.0594 to $0.15 s… [+1234 chars]"
//     }
// ]
 
  static defaultProps = {
       pageSize : 9,
       category : 'general',
       apiKey : '686531ff838549f2ae9ed953de34b76f',
       categoryCountry : "in"
  }

  static PropType = {
       pageSize : PropTypes.number,
       category : PropTypes.string,
       apiKey : PropTypes.string,
       categoryCountry : PropTypes.string
  }
  
  constructor(props){
    super(props);
    this.state = {
      articles : [],
      page : 1,
      loading : false,
      totalResults: 0
    }
    document.title = `NewsBite | ${this.capitalize(this.props.category)}`
  }

  capitalize = (word) =>{
     let lower = word.toLowerCase();
     return lower.charAt(0).toUpperCase() + (lower.slice(1));
  }
  
  componentDidMount = async() =>{
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.categoryCountry}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    this.props.setProgress(30)
    let parsedData = await data.json();
    this.props.setProgress(100)
    this.setState({loading:false})
    this.setState({
        articles : parsedData.articles,
        totalResults : parsedData.totalResults
    })
    // this.props.setProgress(100)
    // this.setState({
    //   page : this.state.page
    // })
    // this.update();

  }

  // update = async() =>{
  //   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.categoryCountry}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //   this.setState({loading:true})
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({loading:false})
  //   this.setState({
  //       articles : parsedData.articles,
  //       totalResults : this.state.totalResults
  //   })
  // }

  handlePrevious = async() =>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.categoryCountry}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loading:false})
    this.setState({
        articles : parsedData.articles,
        totalResults : this.state.totalResults,
        page : this.state.page - 1
    })
    // this.setState({
    //   page : this.state.page - 1
    // })
    // this.update();
  }

  handleNext = async() => {
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.categoryCountry}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loading:false})
    this.setState({})
    this.setState({
        articles : parsedData.articles,
        page : this.state.page + 1,
        totalResults : this.state.totalResults
    })
    
  //   this.setState({
  //     page : this.state.page + 1
  //   })
  //   this.update();
  //  }
  }
  }
  // handleIndianClick = () =>{
  //   this.componentDidMount("in");
  //   this.handleNext("in");
  //   this.handlePrevious("in");
  // } 

  // handleAmericanClick = () =>{
  //   this.componentDidMount("us");
  //   this.handleNext("us");
  //   this.handlePrevious("us");
  // }

  fetchMoreData = async() =>{
    this.setState({
      page : this.state.page + 1
    })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.categoryCountry}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles : this.state.articles.concat(parsedData.articles),
      totalResults : this.state.totalResults,
  })
  

  }

  render() {
    return (
      <>
        <h2 className='text-center'>NewsBite - Top {this.capitalize(this.props.category)} HeadLines</h2>
        <div className='container'>
        <CategoryNavbar handleIndianClick={this.handleIndianClick} handleAmericanClick={this.handleAmericanClick}/>
        </div>
       


        {this.state.loading && <Spinner/>}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className='container'>
        <div className='row my-4'>
          { this.state.articles.map((element) =>{
            return <div className='col-md-4 ' key={element.url}><NewsItem title={element.title?element.title.slice(0,60):""} description={element.description?element.description.slice(0,62):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author?element.author:"unknown"} publishedAt={element.publishedAt?element.publishedAt:" "} source={element.source.name}/></div>
          })}
   
        </div>
        </div>
        </InfiniteScroll>  
{/*       
        <div className='row my-3'> 
          
        </div>  */}

        {/* {!this.state.loading && <div className='container d-flex justify-content-between'>
           <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevious}>&larr; Previous</button>
           <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
        </div>} */}
      </>
    )
  }
}

export default News
