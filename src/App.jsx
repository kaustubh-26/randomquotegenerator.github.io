import { useEffect } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { getQuote } from './features/quote/quoteSlice'

function App() {
  
  const quote = useSelector(state => state.quote);
  const themeColor = useSelector(state => state.color);
  const dispatch = useDispatch();

  const baseURL = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&";
  const baseTumblrURL = "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&";

  useEffect(() => {
    dispatch(getQuote());
    updateBodyClass(themeColor);

  },[themeColor])

  const updateBodyClass = (color) => {
    const bodyClassList = document.body.classList;
    const classesToRemove = [];

    // Loop through the body classes and find those that match 'bg-*'
    bodyClassList.forEach((className) => {
      if (className.startsWith('bg-')) {
        classesToRemove.push(className);
      }
    });

    // Remove each matching class
    classesToRemove.forEach((className) => bodyClassList.remove(className));
    document.body.classList.add(`bg-[${color}]`);
  };

  const encodeTwitterUrl = (text) => {
    const params = new URLSearchParams();
    params.append('text', text);
    return params.toString();
  };

  const encodeTumblrUrl = (author, text) => {
    const params = new URLSearchParams();
    params.append('caption', author);
    params.append('content', text);
    return params.toString()+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button';
  };

  const getNewQuote = () => {
    dispatch(getQuote());
    updateBodyClass(themeColor);
  }

  return (
    <>
      <div id="quote-box" className='quote-container'>
        <div id="text" className={`quote text-[${themeColor}]`}>
          <i className='fa fa-quote-left'></i>
          <span className='mx-2'>{quote.text}</span>
          <i className='fa fa-quote-right'></i>
        </div>
        <div id="author" className={`w-full h-auto clear-both pt-[20px] text-right text-[${themeColor}]`}>- {quote.author}</div>
        <div id="buttons" className='w-full m-auto block mt-[30px] text-white'>
          <a href={baseURL+encodeTwitterUrl('"'+quote.text+'" '+quote.author)} id="tweet-quote" className={`sharelink bg-[${themeColor}]`}>
            <i className='fa fa-twitter'></i>
          </a>
          <a href={baseTumblrURL+encodeTumblrUrl(quote.author, quote.text)} id="tumblr-quote" className={`sharelink bg-[${themeColor}] ml-4`}>
          <i className='fa fa-tumblr'></i>
          </a>
          <button className={`action-btn bg-[${themeColor}] float-right`} id="new-quote" onClick={getNewQuote}>New quote</button>
        </div>
      </div>
    </>
  )
}

export default App;