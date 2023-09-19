// import TopNavigation from '../TopNavigation';
import { BsPlusCircleFill } from 'react-icons/bs';
import TopNavigation from '../TopNavigation/TopNavigation';


const ContentContainer = () => {
  return (
    <div className='content-container'>
      <TopNavigation />
      <div className='content-list'>
        <Post
          name='momo'
          timestamp='one week ago'
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.`}
        />
        <Post name='cato' timestamp='one week ago' text={`Lorem ipsum dolor. `} />
        <Post name='meow' timestamp='5 days ago' text={`Lorem.`} />
        <Post
          name='Ellie'
          timestamp='4 days ago'
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. `}
        />
        <Post
          name='smsm'
          timestamp='4 days ago'
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.
          
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.`}
        />
        <Post
          name='jonas'
          timestamp='2 days ago'
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. `}
        />
        <Post
          name='Albert'
          timestamp='22 hours ago'
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. ☺️ `}
        />
        <Post
          name='Rebecca'
          timestamp='3 hours ago'
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.`}
        />
        <Post
          name='meooooow'
          timestamp='Just now'
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.`}
        />
      </div>
      <BottomBar />
    </div>
  );
};



const Post = ({name, timetamp, text}) => {
  const seed = Math.round(Math.random()*100);
  return(
    <div className="post">
      <div className="avatar-wrapper">
        <img src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`} alt="avatar" className='avatar' />
      </div>

      <div className="post-content">
        <p className="post-owner">
          {name}
          <small className='timestamp'>{timetamp}</small>
        </p>
        <p className='post-text'>{text}</p>
      </div>
    </div>
  )
}




const BottomBar = () => {
  return (
    <div className='bottom-bar'>
      <PlusIcon />
      <input type='text' placeholder='Enter message...' className='bottom-bar-input' />
    </div>
  )
}





const PlusIcon = () => (
    <BsPlusCircleFill
      size='22'
      className='text-green-500 dark:shadow-lg mx-2 dark:text-primary'
    />
);





export default ContentContainer
