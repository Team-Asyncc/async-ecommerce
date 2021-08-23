import Container from './Container';

const Items = ({ category , id}) => {
  return (
    <div id={id} className="items mt-20">
      <div className="heading mb-8  flex justify-between">
        <div  className="text-4xl ml-8  font-extrabold text-center inline-block">
          {category.heading}
        </div>
        <div className="mr-4 self-end">ViewMore</div>
      </div>
      <Container items={category.items} />
    </div>
  );
};

export default Items;
