import Items from './Items';

function ItemsDisplay() {
  const itemList = [
    {
      heading: "Women's Clothing",
      items: [
        {
          description: 'Casuals',
          imageurl:
            'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
        },
        
        {
          description: 'Track Suits',
          imageurl:
            "https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=375&q=80",
        },

        {
          description: 'Formals',
          imageurl:
            "https://images.unsplash.com/photo-1614786269829-d24616faf56d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80",
        },

        {
          description: 'Ethnic Wear',
          imageurl:
            "https://i.etsystatic.com/16963724/r/il/636079/2735675734/il_794xN.2735675734_r2l1.jpg",
        },

        {
          description: 'Shirt & Jean',
          imageurl:
            'https://images.unsplash.com/photo-1614251056216-f748f76cd228?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        },
      ],
    },
      
    {
      heading: "Men's Clothing",
      items: [
        {
          description: 'Formals',
          imageurl:
            "https://images.pexels.com/photos/6976004/pexels-photo-6976004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
          description: 'Casuals',
          imageurl:
            "https://images.pexels.com/photos/2896359/pexels-photo-2896359.jpeg?cs=srgb&dl=pexels-ayaka-kato-2896359.jpg&fm=jpg",
        },
        
        {
          description: 'T-Shirts',
          imageurl:
            "https://cdn.discordapp.com/attachments/825361446358614096/878704383993446440/photo-1506634572416-48cdfe530110.png",
        },

        {
          description: 'Blazers',
          imageurl:
            "https://images.unsplash.com/photo-1530735038726-a73fd6e6a349?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        },


        {
          description: 'Jackets',
          imageurl:
            "https://images.unsplash.com/photo-1611006328160-064054b4e718?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        },
      ],
      },
    
    {
      heading: "Kids Wear",
      items: [
        {
          description: 'Dresses',
          imageurl:"https://s2.best-wallpaper.net/wallpaper/iphone/1710/Happy-child-girl-play-bubbles-summer-grass_iphone_320x480.jpg",
        },
        {
          description: 'Dungarees',
          imageurl:
            "https://images.unsplash.com/photo-1570545917537-873e36d4f64a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        },

        {
          description: 'Sports Wear',
          imageurl:
            "https://images.unsplash.com/photo-1440288736878-766bd5839edb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
        },

        {
          description: 'Party Look',
          imageurl:
            "https://s1.1zoom.me/big0/467/Boys_Bench_Jeans_Glance_475822.jpg",
        },

        {
          description: 'Casuals',
            imageurl:
              "https://images.unsplash.com/photo-1497340525489-441e8427c980?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            
        },
      ],
      },
    
    {
      heading: "Footwear",
      items: [
        {
          description: 'Casual Shoes',
          imageurl:
            "https://images.unsplash.com/photo-1619058772977-358b473720bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        },
        {
          description: 'Jordans',
          imageurl:
            "https://images.unsplash.com/photo-1602033693387-3531914e7185?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2087&q=80",
        },

        {
          description: 'Mojaris',
          imageurl:
            "https://images.unsplash.com/photo-1534653299134-96a171b61581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=582&q=80",
        },

        {
          description: 'Formal Shoes',
          imageurl:
            "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=888&q=80",
        },

        {
          description: 'Sport Shoes',
          imageurl:
            "https://images.unsplash.com/photo-1565121715276-7d32d0977b6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=913&q=80"
        },
      ],
      },
    
    {
      heading: "Accessories",
      items: [
        {
          description: 'Sunglasses',
          imageurl:
            "https://images.unsplash.com/photo-1555617117-08d2a80f6aa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        },
        {
          description: 'Hand Bags',
          imageurl:
            "https://images.unsplash.com/photo-1597358371607-5987dd7da3d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80",
        },

        {
          description: 'Watches',
          imageurl:
            "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        },

        {
          description: 'Bracelets',
          imageurl:
            "https://images.unsplash.com/photo-1608543837770-dbad30f0e7c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        },

        {
          description: 'Jewellery',
          imageurl:
            "https://images.unsplash.com/photo-1620441090373-f6977a23fa0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        },
      ],
      },
    
    {
      heading: "Electronics",
      items: [
        {
          description: 'Headphones',
          imageurl:
            "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        },
        {
          description: 'Camera',
          imageurl:
            "https://images.unsplash.com/photo-1500634245200-e5245c7574ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        },

        {
          description: 'iPhone',
          imageurl:
            "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=883&q=80",
        },

        {
              description: 'Grinder',
              imageurl:
                  "https://images.unsplash.com/photo-1585237672814-8f85a8118bf6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=865&q=80",
        },
        {
          description: 'Laptop',
          imageurl:
            "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        },
      ],
      },
    
    {
      heading: "Home Decor",
      items: [
        {
          description: 'Furniture',
          imageurl:
            "https://images.unsplash.com/photo-1603204077167-2fa0397f591f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        },
        {
          description: 'Planters',
          imageurl:
            "https://images.unsplash.com/photo-1615884241095-305d10e66980?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        },

        {
          description: 'Rugs & Mirror',
          imageurl:
            "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80",
        },

        {
          description: 'Chairs',
          imageurl:
            "https://images.unsplash.com/photo-1625296048730-ada61dcf378b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80",
        },

        {
          description: 'Cabinets',
          imageurl:
            "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        },
      ],
      },
    
    {
      heading: "Cosmetics",
      items: [
        {
          description: 'Makeup',
          imageurl:
            "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        },
        {
          description: 'SkinCare',
          imageurl:
            "https://images.unsplash.com/photo-1608611518492-dbf85f5bbcb8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        },

        {
          description: 'Foundation',
          imageurl:
            "https://images.unsplash.com/photo-1557205465-f3762edea6d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",
        },

        {
          description: 'Mascara',
          imageurl:
            "https://images.unsplash.com/photo-1584051022121-6ee465f21b5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",
        },

        {
          description: 'Perfumes',
          imageurl:
            "https://images.unsplash.com/photo-1610461888750-10bfc601b874?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=944&q=80",
        },
      ],
    },
    
    
  ];
  return (
    <>
          {itemList.map((category, index) => {
              return <Items category={category} key={index} />;
      })}
    </>
  );
}

export default ItemsDisplay;
