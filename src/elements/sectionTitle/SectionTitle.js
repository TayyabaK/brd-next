// // import React from 'react';
'use client'
import ScrollAnimation from "react-animate-on-scroll";


const SectionTitle = ({subtitle, title, description, textAlign, radiusRounded}) => {
    return (
        <div className={`section-title ${textAlign}`}>
            <ScrollAnimation 
            animateIn="fadeInUp"
            animateOut="fadeInOut"
            animateOnce={true}>
                <h4 className={`subtitle ${radiusRounded}`}><span className="theme-gradient" dangerouslySetInnerHTML={{__html: subtitle}}></span></h4>
            </ScrollAnimation>
            
            <ScrollAnimation 
            animateIn="fadeInUp"
            animateOut="fadeInOut"
            animateOnce={true}>
                <h2 className="title w-600 mb--20" dangerouslySetInnerHTML={{__html: title}}></h2>
            </ScrollAnimation>

            <ScrollAnimation 
            animateIn="fadeInUp"
            animateOut="fadeInOut"
            animateOnce={true}>
                <p className="description b1" dangerouslySetInnerHTML={{__html: description}}></p>
            </ScrollAnimation>
        </div>
    )
}
export default SectionTitle;

// 'use client'
// import { useEffect } from 'react';
// import animate from 'animate.css'

// const SectionTitle = ({ subtitle, title, description, textAlign, radiusRounded }) => {
//     useEffect(() => {
//         animate('fadeInUp', { element: '.subtitle' });
//         animate('fadeInUp', { element: '.title' });
//         animate('fadeInUp', { element: '.description' });
//       }, []);

//   return (
//     <div className={`section-title ${textAlign}`}>
//       <h4 className={`subtitle ${radiusRounded}`}>
//         <span className="theme-gradient" dangerouslySetInnerHTML={{ __html: subtitle }}></span>
//       </h4>
//       <h2 className="title w-600 mb--20" dangerouslySetInnerHTML={{ __html: title }}></h2>
//       <p className="description b1" dangerouslySetInnerHTML={{ __html: description }}></p>
//     </div>
//   );
// };

// export default SectionTitle;
