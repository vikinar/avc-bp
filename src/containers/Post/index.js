import {useState,} from "react";

import dynamic from "next/dynamic";

import Layout from "../../components/Layout";
import Article from "../../components/Layout/Article"

import parse from 'html-react-parser';
import Lightbox from 'react-image-lightbox';

//Custom styling
import style from './style'

//Lazy

const ImgLazyDynamic = dynamic(() => import('../../utils/ImageLazy'),
    {
        loading: () => <p>Loading</p>,
        ssr: false
    }
)

// const chapter = {
//     title: 'Պատմություն',
//     shortDescription: String,
//     featuredImage: String,
//     sections: [
//         {
//             layoutStyle: `single-image`, // {singlePost, gallery, video},
//             content: [`<strong>Հայոց պատմություն</strong> կամ հայ ժողովրդի պատմություն, հայ էթնոսի պատմություն, որը ժամանակագրական առումով բաժանվում է մի քանի դարաշրջանների։ Այդ բաժանումն անվանում են պարբերացում։ Ներկայումս Հայոց պատմության պարբերացումը կատարվում է հետևյալ սկզբունքով. <ul style="list-style: initial; list-style-position: inside">
// <li>Հնագույն շրջան - անհիշելի ժամանակներից մինչև Վանի թագավորության անկումը</li><li>Հին շրջան - Երվանդունիների թագավորության կազմավորումից մինչև քրիստոնեության հռչակումը պետական կրոն</li>
// <li>Միջնադար - քրիստոնեությունը պետական կրոն հռչակելուց մինչև հայ ազգային-ազատագրական շարժման վերելքը (վաղ, զարգացած և ուշ միջնադար)</li>
// <li>Նոր շրջան - սկսվում է հայ ազատագրական շարժումներով և հասնում մինչև Հայաստանի առաջին Հանրապետության հռչակումը։</li>
// </ul>`], // {html}
//             images: [
//                 {
//                     src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Map_of_historical_Armenia%2C_1849.jpeg/1024px-Map_of_historical_Armenia%2C_1849.jpeg',
//                     title: 'Հայկական լեռնաշխարհ',
//                     caption: ''
//                 }
//             ], // [urls]
//             video: String,
//             audio: Array,
//         }
//     ]
// }

const Home = ({data}) => {

    const chapter = data[0].desc;

    let [isOpen, setOpen] = useState(false)

    return (
        <Layout>
            <Article>
                <h1 className="text-gray-700 leading-relaxed text-2xl">{chapter.title}</h1>
                {chapter.sections.map((section, index) => (
                    <section className="content mt-2" key={`section-${index}`}>
                        {
                            section.images ? section.images.map((image, j) => (
                                    <picture className='block w-full lg:w-6/12 mr-4 mb-4' key = {`picture-${j}`}>
                                        <ImgLazyDynamic
                                            className='single-img w-full shadow border-2 hover:opacity-75'
                                            img={image.src}
                                            desc={image.title}
                                            click={() => setOpen(true)}
                                        />
                                        <h4 className='text-center text-sm italic text-gray-600'>{image.title}</h4>
                                    </picture>
                                )
                            ) : null
                        }
                        {isOpen && (
                            <Lightbox
                                mainSrc={
                                    section.images ? section.images.map(image => image.src) : null
                                }
                                imageTitle={
                                    section.images.title !== '' ? section.images.map(image => image.title) : null
                                }
                                imageCaption={
                                    section.images !== '' ? section.images.map(image => image.caption) : null
                                }
                                onCloseRequest={() => setOpen(false)}
                            />
                        )}
                        {
                            section.content.map((content, i) => (
                                <section key={`content-${index}`} className="text-gray-800">{parse(content)}</section>
                            ))
                        }
                    </section>
                ))}
            </Article>
            <style jsx>{style}</style>
        </Layout>
    )
}

Home.getInitialProps = async () => {
    const response = await fetch('http://localhost:3000/api/data')
    const data = await response.json()
    console.log(data)
    return {data}
}

export default Home