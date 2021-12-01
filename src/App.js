import cardImage from './assets/card-image.jpg';
import avatar from './assets/avatar.jpg';
import Card from './components/Card';

function App() {
  return (
    <div className='my-16 container mx-auto'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
        {Array(12)
          .fill()
          .map((_, index) => (
            <Card key={index} cardImage={cardImage} avatar={avatar} />
          ))}
      </div>
    </div>
  );
}

export default App;
