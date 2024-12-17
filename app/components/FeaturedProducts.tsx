
  export default function FeaturedCards(){
    const cards=[
        {
            title:"Digital Success",
            description:"Master online entrepreneurship with modern tools and strategies",
            icons:"💻",
            tags:["Digital", "Technology","Growth"],
        },
        {
            title:"Solopreneur's Mind",
            description:"Develop the mindset needed for solo business success",
            icons:"🧠",
            tags:["Mindset", "Vision","Focus"],
        },
        {
            title:"Learning Hub",
            description:"Access comprehensive entrepreneurship education resources",
            icons:"📚",
            tags:["Education", "Skills","Development"],
        },
        {
            title:"Network Building",
            description:"Connect with like-minded entrepreneurs and mentors",
            icons:"🤝",
            tags:["Networking", "Community", "Collaboration"],
        },
        {
            title:"Business Essentials",
            description:"Master fundamental business principles and strategies",
            icons:"💼",
            tags:["Business", "Strategy","Management"],
        },
    ]
    return(
    <div className="container mx-auto p-4">
        <div className="gird grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) =>(
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="p-6">
                        <div className=" flex items-center mb-4">
                            <span className="text-3xl mr-2">{card.icons}</span>
                            <h4 className="text-xl font-semibold">{card.title}</h4>
                        </div>
                        <p className="text-gray-600 mb-4">{card.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {card.tags.map((tag, tagIndex) => (
                               
                                <span key={tagIndex} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">{tag}</span>

                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>

    </div>
    )
  }