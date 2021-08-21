import ItemCard from "./ItemCard"

const Container = ({ items }) => {
    return (
        < >
            
            <div className=" py-8 px-3 bg-gradient-to-r from-pink-100 to-blue-100 bg-opacity-20 min-h-96 w-full rounded-xl flex flex-wrap justify-around items-center">
                
                {items.map((obj, idx) => {
                    return <ItemCard imageurl={obj.imageurl} description={obj.description} key={idx} />
                })}
                
               
            </div>
        </>
    );

};

export default Container;