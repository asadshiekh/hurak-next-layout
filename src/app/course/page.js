import Image from 'next/image';
import Breadcrumbs from '@/components/frontend-panel/course-page/Breadcrumbs';
import CourseFeatures from '@/components/frontend-panel/course-page/CourseFeatures';
import LearningOptions from '@/components/frontend-panel/course-page/LearningOptions';
import ReviewsSection from '@/components/frontend-panel/course-page/ReviewsSection';
import FeatureSection from '@/components/frontend-panel/course-page/FeatureSection';
import FAQItem from '@/components/global/FAQItem';
import Link from 'next/link';
import AreasCovered from '@/components/frontend-panel/course-page/AreasCovered';
import { FaChalkboardTeacher, FaLaptop, FaGlobe, FaBuilding } from 'react-icons/fa';
import Tooltip from '@/components/global/Tooltip';
import { AiOutlineInfoCircle } from 'react-icons/ai'; // Import the icon you want to use
import ScrollableLinks from "@/components/global/ScrollableLinks";
import Navbar from "@/components/global/Navbar";
import Footer from '@/components/global/Footer';

const CourseSection = () => {

  const categories = [
    { name: 'Security', link: '#' },
    { name: 'Top up for Door Supervisors', link: '#' },
    { name: 'SIA Top-Up Training For Door Supervisors', link: '#' },
  ];

  const courseFeatures = [
    '2-Day Course (with mandatory distance learning)',
    'ACT Awareness & ACT Security courses included',
    'Recognising terrorism',
    'Effective crowd control techniques',
    'Physical Intervention',
    'Get certified in 10–15 working days'
  ];

  const reviews = [
    {
      name: 'Fred Pulisic',
      course: 'Hurak Learning',
      date: 'Tue July 30 2024',
      rating: 5,
      review: 'I booked my training through Hurak but I got my SIA training at Reed Training. The trainers were awesome and I did get the required treatment and training as I was told. Their service was good and I would love to do my CCTV training with them in the future.',
    },
    {
      name: 'Fred Pulisic',
      course: 'Hurak Learning',
      date: 'Tue July 30 2024',
      rating: 5,
      review: 'I booked my training through Hurak but I got my SIA training at Reed Training. The trainers were awesome and I did get the required treatment and training as I was told. Their service was good and I would love to do my CCTV training with them in the future.',
    },
    {
      name: 'Fred Pulisic',
      course: 'Hurak Learning',
      date: 'Tue July 30 2024',
      rating: 5,
      review: 'I booked my training through Hurak but I got my SIA training at Reed Training. The trainers were awesome and I did get the required treatment and training as I was told. Their service was good and I would love to do my CCTV training with them in the future.',
    },
    // Add more reviews here
  ];

  const faqData = [
    {
      question: 'What is the purpose of the SIA Top-Up Training for Security Guard Licence?',
      answer: 'The purpose of the SIA Top-Up Training for Security Guard Licence is to provide existing security guard licence holders with updated knowledge and skills required to meet the new licence renewal requirements set by the Security Industry Authority (SIA).',
    },
    {
      question: 'Who is eligible to take the SIA Top-Up Training course?',
      answer: 'The course is for those who are renewing their SIA Security Guard licence and meet the SIA eligibility criteria.',
    },
    {
      question: 'Will the SIA Top-Up Training course improve my job prospects and career advancement in the security industry?',
      answer: 'Yes, completing the course will enhance your knowledge and skills, increasing your chances for better job opportunities in the security industry.',
    },
    {
      question: 'Can I request an exemption from the SIA Top-Up Training course if I have extensive experience in the security field?',
      answer: 'No, the course is mandatory for all SIA security guard licence holders regardless of their experience.',
    },
    {
      question: 'How often do I need to retake the SIA Top-Up Training?',
      answer: 'You need to retake the course whenever you renew your SIA Security Guard licence, as per the new regulations.',
    },
  ];

  return (

    <>
    <Navbar/>
    <ScrollableLinks/>
    <div className="w-full bg-white">
      <div className="container mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="w-full md:w-[40%] md:order-2 mb-6 md:mb-0">
          <Image
            src="/images/course-image.jpg"
            alt="SIA Top-Up Training"
            className="w-full h-auto rounded-lg"
            priority
            width="400"
            height="300"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-[60%] md:order-1">
        <Breadcrumbs categories={categories} />
          <h1 className="text-3xl font-medium mb-4 mt-4">SIA Top-Up Training For Door Supervisors</h1>
          <p className="text-[20px] mb-4 w-full md:w-[90%]">
            The SIA Top-Up Training for Door Supervisors Upskilling Course is aimed at individuals already working in the industry as Door Supervisors who need to renew their license after 1st October 2022.
          </p>
          <p className="text-[12px] text-black mb-5 font-medium">16 Course Provider</p>
          <p className="text-xl font-medium mb-2">From £99.99 <span className="text-sm text-gray font-light">All inc</span></p>
          <p className="text-sm mb-4"><span className="line-through">£139.99</span> 29% Off</p>
          <Link href="pricing-plans" className="text-xl font-medium bg-secondary text-white px-6 py-3 rounded-md hover:bg-blue-600">Book Now</Link>
          
          <div className="mt-4">
            <p className="text-sm">
              4.8 
              <span className="text-yellow-400">★</span>
              <span className="text-yellow-400">★</span>
              <span className="text-yellow-400">★</span>
              <span className="text-yellow-400">★</span>
              <span className="text-yellow-400">★</span>
              <span className="underline">(1136 ratings)</span>
               <span className="text-gray font-light ml-2">2,782 students enrolled</span> 
            </p>
          </div>
        </div>
      </div>
      
      <section className="course-features">
        <CourseFeatures features={courseFeatures}></CourseFeatures>
      </section>

      <section className="learning-options">
        <LearningOptions></LearningOptions>
      </section>

      <section className="course-main-module">
        <div className="container mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Left Column (3 col) */}
            <div className="md:col-span-3  p-4">
              
              <div className='adblock bg-[#F8FAFB] p-8 text-center border-[1px] rounded border-[#E2D9E2]'>
                <lable className="text-primary border-[1px] border-[#0f7c90] p-1 rounded-full text-sm">Want to book</lable>
                <h2 className='mt-4 text-2xl text-primary font-medium'>CITB Health, Saftey & Environment test?</h2>
                <p className='text-sm mt-2 mb-8 text-black font-medium'>Includes complimentary mock test and study materials (worth £60)</p>
                <Link href="#" className='mt-5 bg-secondary text-white px-5 py-3 text-xl font-medium'>Book now for £37.50</Link>
              </div>

              <div className='imageblock mt-3 '>

                  <Image 
                  src="/images/klarna.webp" 
                  alt="Klarna payment image" 
                  layout="responsive" 
                  width={200} 
                  height={200} 
                  loading="lazy" 
                  className='rounded'
                />


              </div>

            </div>

            {/* Middle Column (6 col) */}
            <div className="md:col-span-6 p-4">
              <h2 className="font-semibold mb-2 text-3xl mb-5">First Aid at Work Course</h2>
              <p>To get a construction job in the UK today, most construction sites require you to have a <strong>CSCS Card</strong>. The CSCS Green Labourer Card allows individuals to work on sites in entry-level positions; it is issued as part of the <strong>Construction Skills Certification Scheme </strong>and is <strong>valid for five years</strong>.</p>
              <p className='my-4'>Carrying a CSCS Green Card demonstrates that you have the appropriate knowledge and skills for the job.</p>
              <p className='my-4'>After completing the Green CSCS Card Course, you’ll become eligible to <Link href="#" className='text-[#007bff] underline font-bold'> apply for the CSCS Green Card</Link>. Getting the CSCS Green Card will help you get work on a construction site as a labourer (bricklayer, carpenter, plumber, etc.).</p>
              <p className='my-4'>The Green CSCS Card Course is a one-day course that lasts for a lifetime. That’s why it’s the most frequently opted qualification for getting a CSCS Labourer Card.</p>

            <div className='courselinkblock bg-[#eeeeee] p-5 text-center border-[1px] rounded border-[#E2D9E2]'>
                <Link href="#" className='text-[#007bff] font-bold leading-7'>A CSCS Green Card is for non-skilled workers in the construction industry. However, if you work in a skilled occupation you would need to take a <span className='underline'>CSCS NVQ</span> qualification. </Link>
            </div>

            <div className='whoisthisblock bg-[#eeeeee] p-5 text-left border-[1px] rounded border-[#E2D9E2] mt-5'>
              <h2 className='text-black text-3xl font-medium mb-5'>Who is this course for?</h2>
              <ul className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                <li className='font-medium'>✓ Individuals looking to work in the construction industry at entry-level positions</li>
                <li className='font-medium'>✓ Individuals who want to perform security guarding duties on site</li>
                <li className='font-medium'>✓ Individuals already working in the construction industry</li>
              </ul>
            </div>

            <div className='cetificateblock my-5'>
              <h2 className='text-black text-3xl font-medium mb-5'>CSCS Green Card Course Certification</h2>
              <p className='mb-5 text-black font-medium'>You will receive the Level 1 Award in Health and Safety within a Construction Environment (RQF) certificate upon completing the course.</p>
                <Image 
                  src="/images/certificate.webp" 
                  alt="CSCS Green Card Certiciate" 
                  layout="responsive" 
                  width={500} 
                  height={500} 
                  loading="lazy" 
                  className='rounded'
                />
            </div>

            <div className='areascovered'>
              <AreasCovered></AreasCovered>
            </div>

   


            </div>

            {/* Right Column (3 col) */}
            <div className="md:col-span-3 hidden lg:block">

                <div className='buybox bg-white p-6 text-left border-[1px] rounded border-[#E2D9E2] w-[300px]'>
                    <p className='text-[22px]'><strong>From £89.99</strong> <span className='text-xs'>All inc</span></p>
                    <p className='my-5 text-[17px] font-medium'>Learning options</p>
                    <ul>
                      <li className='text-[15px] mb-3 flex items-center'>  <FaChalkboardTeacher size={14}  className='mr-2'/> Classroom learning</li>
                      <li className='text-[15px] mb-3 flex items-center'>  <FaLaptop size={14} className='mr-2' /> Live online virtual class</li>
                      <li className='text-[15px] mb-3 flex items-center'>  <FaGlobe size={14} className='mr-2' /> E-learning</li>
                      <li className='text-[15px] flex items-center'>  <FaBuilding size={14}  className='mr-2'/> In-house</li>
                    </ul>
                    <div className='text-center my-10'>
                      <Link href="#" className='bg-secondary text-white px-4 py-4 text-normal font-bold rounded'>Select Learning Option</Link>
                    </div>

                    <div className='buybox_tooltip'>
                      
                      <ul>
                        <li className='flex mb-2'>
                          <p className='mr-3 font-medium text-[17px]'>
                            No booking fee  
                          </p>
                          <Tooltip icon={<AiOutlineInfoCircle size={18} />} // Pass the icon as a prop
                          tooltipText="Any course listed on our platform is manually screened by a human to ensure it is as good as it can be."
                          />
                        </li>
                        <li className='flex mb-2
                        2'>
                          <p className='mr-3 font-medium text-[17px]'>
                          Approved providers only
                          </p>
                          <Tooltip icon={<AiOutlineInfoCircle size={18} />} // Pass the icon as a prop
                          tooltipText="Any course listed on our platform is manually screened by a human to ensure it is as good as it can be."
                          />
                        </li>
                        <li className='flex mb-2'>
                          <p className='mr-3 font-medium text-[17px]'>
                          Buying for your team? 
                          </p>
                          <Tooltip icon={<AiOutlineInfoCircle size={18} />} // Pass the icon as a prop
                          tooltipText="Any course listed on our platform is manually screened by a human to ensure it is as good as it can be."
                          />
                        </li>

                        <li className='flex mb-2'>
                          <p className='mr-3 font-medium text-[17px]'>
                          Pay by invoice 
                          </p>
                          <Tooltip icon={<AiOutlineInfoCircle size={18} />} // Pass the icon as a prop
                          tooltipText="Any course listed on our platform is manually screened by a human to ensure it is as good as it can be."
                          />
                        </li>
                      </ul>

                      <Link href="#" className='underline text-xs'>Pay 3 monthly interest-free payments with</Link>

            
                    </div>

                </div>

            </div>
          </div>
        </div>
      </section>


      <section className="review-section bg-[#f8f9fa]">
      <ReviewsSection reviews={reviews} />
      </section>

      <section className="feature-section py-20">
        <FeatureSection></FeatureSection>
      </section>


      <section className="faq-course-section pb-20">
        <div className="container mx-auto px-10 lg:px-20">
          <h2 className="text-2xl font-normal mb-4">Frequently Asked Questions</h2>
          <div className="bg-white shadow-md rounded-lg">
            {faqData.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

    </div>
    <Footer></Footer>
    </>
  );
};

export default CourseSection;
