import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { HelmetProvider } from 'react-helmet-async'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

// Layout & Error
import Root from './pages/default/Root'
const Error404 = lazy(() => import('./pages/default/Error404'))

// Common Pages
const Home = lazy(() => import('./pages/Home'))
const Portfolios = lazy(() => import('./pages/Portfolios'))
const ContactUs = lazy(() => import('./pages/ContactUs'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogDetails = lazy(() => import('./pages/BlogDetails'))
const AboutUs = lazy(() => import('./pages/AboutUs'))
const Careers = lazy(() => import('./pages/Careers'))
const Project = lazy(() => import('./pages/Project'))
const TechnologyTransformation = lazy(() => import('./pages/BusinessTransformation'))

// Legal Pages
const TermsOfUse = lazy(() => import('./pages/TermsOfUse'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'))
const RefundPolicy = lazy(() => import('./pages/RefundPolicy'))




// 🔹 Services → Manufacturing
const Cosmetics = lazy(() =>
  import('./pages/Services/Manufacturing/Cosmetics')
);

const Electronics = lazy(() =>
  import('./pages/Services/Manufacturing/Electronics')
);

// 🔹 Services → Organic Growth (SEO)
const CareerCounselling = lazy(() =>
  import("./pages/Services/Education/CareerCounselling")
);

const StudyAbroad = lazy(() =>
  import("./pages/Services/Education/StudyAbroad")
);

const Internship = lazy(() =>
  import("./pages/Services/Education/Internship")
);

const Training = lazy(() =>
  import("./pages/Services/Education/Training")
);

const UniversityAdmission = lazy(() =>
  import("./pages/Services/Education/UniversityAdmission")
);



// services -techonology
const CloudSolution = lazy(() =>
  import('./pages/Services/Technology/CloudSolution')
);

const CyberSecurity = lazy(() =>
  import('./pages/Services/Technology/CyberSecurity')
);

const DigitalMarketing = lazy(() =>
  import('./pages/Services/Technology/DigitalMarketing')
);

const UxDesign = lazy(() =>
  import('./pages/Services/Technology/UxDesign')
);

const WebDevelopment = lazy(() =>
  import('./pages/Services/Technology/WebDevelopment')
);

// 🔹 Services → Renewable Energy
const Solar = lazy(() =>
  import('./pages/Services/RenewableEnergy/Solar')
);






// 🔹 Services → Immigration
const AustraliaImmi = lazy(() =>
  import('./pages/Services/Immigration/AustraliaImmi')
);

const CanadaImmi = lazy(() =>
  import('./pages/Services/Immigration/CanadaImmi')
);

const Latvia = lazy(() =>
  import('./pages/Services/Immigration/Latvia')
);
// 🔹 Services → Logistics
const Exports = lazy(() =>
  import('./pages/Services/Logistics/Exports')
);

const FreightForward = lazy(() =>
  import('./pages/Services/Logistics/FreightForward')
);


// Slider CSS
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
const Team = lazy(() => import('./pages/Services/Team'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error404 />,
    children: [

      // 🔹 Core Pages
      { path: '/', element: <Home /> },
      { path: 'portfolios', element: <Portfolios /> },
      { path: 'contact', element: <ContactUs /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:id', element: <BlogDetails /> },
      { path: 'about', element: <AboutUs /> },
      { path: 'careers', element: <Careers /> },
      { path: 'project/:id', element: <Project /> },
      { path: 'technology-transformation', element: <TechnologyTransformation /> },

      // 🔹 Legal
      { path: 'terms-of-use', element: <TermsOfUse /> },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
      { path: 'cookie-policy', element: <CookiePolicy /> },
      { path: 'refund-policy', element: <RefundPolicy /> },

  

    

    
    

   




     
      
{
  path: 'services/technology/cloud-solutions',
  element: <CloudSolution />
},
{
  path: 'services/technology/cyber-security',
  element: <CyberSecurity />
},
{
  path: 'services/technology/digital-marketing',
  element: <DigitalMarketing />
},
{
  path: 'services/technology/ui-ux-design',
  element: <UxDesign />
},
{
  path: 'services/technology/web-development',
  element: <WebDevelopment />
},




{
  path: 'services/logistics/freight-forwarding',
  element: <FreightForward />
},
{
  path: 'services/logistics/imports-exports',
  element: <Exports />
},


   
{
  path: 'services/education/career-counselling',
  element: <CareerCounselling />
},
{
  path: 'services/education/internship',
  element: <Internship />
},
{
  path: 'services/education/study-abroad',
  element: <StudyAbroad />
},
{
  path: 'services/education/training',
  element: <Training />
},
{
  path: 'services/education/university-admission',
  element: <UniversityAdmission />
},


{
  path: 'services/team',
  element: <Team />
},

{
  path: 'services/renewable-energy/solar',
  element: <Solar />
},
{
  path: 'services/manufacturing/cosmetics',
  element: <Cosmetics />
},
{
  path: 'services/manufacturing/electronics',
  element: <Electronics />
},

{
  path: 'services/immigration/australia',
  element: <AustraliaImmi />
},
{
  path: 'services/immigration/canada',
  element: <CanadaImmi />
},
{
  path: 'services/immigration/latvia-trp',
  element: <Latvia />
},


      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
)

