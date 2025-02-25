import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 600, // adjust as needed
      once: true,
    });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 md:px-16">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-center text-[#000168] mb-6" data-aos="fade-up">
          ABOUT OUR SCHOOL
        </h2>
        
        <div className="mb-8" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-2xl font-semibold text-[#000168] mb-2">
            WELCOME TO HOLY CROSS SCHOOL
          </h2>
        </div>

        {/*  */}
        {/* <ul className="space-y-3">
        <li><Link to="/about/motivating-factor" className="text-blue-600 hover:underline">Motivating Factor</Link></li>
        <li><Link to="/about/our-belief" className="text-blue-600 hover:underline">Our Belief</Link></li>
        <li><Link to="/about/president" className="text-blue-600 hover:underline">President</Link></li>
        <li><Link to="/about/correspondent" className="text-blue-600 hover:underline">Correspondent</Link></li>
        <li><Link to="/about/secretary" className="text-blue-600 hover:underline">Secretary</Link></li>
        <li><Link to="/about/principal" className="text-blue-600 hover:underline">Principal</Link></li>
        <li><Link to="/about/governing-board" className="text-blue-600 hover:underline">Governing Board</Link></li>
      </ul> */}
        {/*  */}
        
        <div className="mb-8" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-xl font-semibold text-[#000168] mb-4">ANBU VAZHVU ASHRAMAM - HOLY CROSS FATHERS</h3>
          <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
            <p>
              Holy Cross School in Palani is run by Holy Cross Fathers, Tamil Nadu. This Holy Cross Fathers is an International Congregation started in France soon after the Napoleonic wars in the 1830s. This Congregation was formed to give basic education to the poor children of France. The Holy Cross Fathers, Sisters and Brothers formed a union to carry out their vision of holistic education. Soon after their foundation, they were invited by church and civil authorities from all over the world. The USA, Canada, Algeria and Bengal (India) were the first countries to invite Holy Cross personnel from France. After Indian independence in 1947, Bengal became part of East Pakistan. So, the Holy Cross members were looking for an opportunity to move over India.
            </p>
            <p>
              The opportune moment came in 1959. They came to Yercaud (Salem) and began their work in the workers' lane of an Estate near Lady Seat in Yercaud. As Yercaud was not conducive for the education of Tamil students then, they shifted their apostolic school to Tiruchirapalli in June, 1967. This move helped them to educate Tamil students in the best of schools in Tiruchirapalli. Frs. Philip Payant and Matthew Kanathukattu were the directors of students in Tiruchy. After his stint as Director, Fr Philip followed his call to start an Ashram in Palani.
            </p>
            <p>
              Fr. Philip came to Palani in 1973 and began the Ashram in a rented house in Shanmugapuram in Palani. His ideal was to live a Gandhian way of life in a humble setting. He was clear that his Ashram should remain true to the roots of the environment, have dialogue with all religions in Palani and espouse a simple way of life. So, when his well wishers gave him some help he bought the present property of seven acres on the way to Kalikkanayakkanpatti village. When the villagers of Kalikkanayakkanpatti requested him for a road through his property, he readily gave them which has become a public road now.
            </p>
            <p>
              Fr. Philip lived a simple life in his Ashram for about 27 years. During these years, he spread the message of love among the poor of his neighborhood. He was a man of simple living and high thinking. Though his means were very limited, he was generous in his hospitality. He loved the poor so much, he bought a small piece of land to house about 18 families. He also brought music teachers from Salem Holy Cross Matriculation School to teach the men to start the St. Michael's Band, which helped many poor families to move out of poverty. He had also helped many a young children financially to pursue their studies. He had a love for St Joseph, who was considered the benefactor of poor children. Though poor, his devotion to St Joseph was so great, he would always advise his friends to take their burdens to St. Joseph.
            </p>
            <p>
              During his lifetime he dreamt of associating this ashram with other franchises in India. Secondly, there were proposals to make this ashram financially stable by starting a nursery and primary schools as farming and dairy proved to be unprofitable. The decline in water table also caused the speedy decline in green cover. After 27 years of hard but simple life in service of his people and God, Fr Philip attained his heavenly abode. His mortal remains are interred in the same campus where he lived for more than 25 years.
            </p>
            <p>
              Soon after his death, Frs Devadoss and Rakshakanathan took over the leadership of the ashram in succession and continued the good work. Very soon, they realized that in order to perpetuate the memory and continue the work, they wanted to incorporate the ashram to the Holy Cross Fathers, Bangalore. The induction of Ashram took place when Fr Devadoss became the Provincial in 2006. Fr. Leonard did the homework, as a councilor, to incorporate the Ashram into a unit of Holy Cross Fathers. Thus Holy Cross Fathers assumed the charge of this registered society with all its assets and liabilities.
            </p>
            <p>
              In 2012, the Fathers of Holy Cross was bifurcated and Tiruchirapalli became the headquarters for Holy Cross Fathers in Tamil Nadu. So, Fr Justin Diraviyam was appointed the Vicariate Superior of Holy Cross Fathers, Tamil Nadu. Under his leadership, he asked Fr Paulraj to do the feasibility studies to develop the Ashram properties. Fr Paulraj contacted many stakeholders and found the proposition to start a school in Palani. Therefore, in 2014 Holy Cross School was started and Fr Paulraj was appointed the first Principal. He did his best to add some infrastructure to the fledgling school.
            </p>
            <p>
              In 2016, Fr John Peter was appointed as the Principal. He worked hard to bring up the standard of the School. He celebrated the annual days in a grand manner. The visibility of the school gained momentum. Soon after his tenure, Fr Telespore was appointed as the Principal. While he added more infrastructure, he is busy acquiring the necessary approval papers for Holy Cross School, Palani from the competent local, State and National authorities for Education. As the area around Holy Cross School has become a thriving hub for new housing projects, the School has a vast potential to grow.
            </p>
          </div>
        </div>
        
        <div className="mb-8" data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-xl font-semibold text-[#000168] mb-4">RECOGNITION</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>HOLY CROSS SCHOOL is recognised with Government of Tamilnadu vide Recognition Code No. 001-06-S-0027-1021</li>
            <li>HOLY CROSS SCHOOL Germinated from seed strength of 150 students, 10 teachers and 2 Supporting staff.</li>
          </ul>
        </div>
        
        <div data-aos="zoom-in" data-aos-delay="400">
          <ul className="space-y-6">
            <li className="flex space-x-4">
              <div className="flex-shrink-0">
                {/* Icon Section (Replace with an icon if needed) */}
                <div className="w-12 h-12 bg-[#000168] rounded-full flex items-center justify-center text-white">
                  {/* Example Icon */}
                  <span className="text-lg font-bold">M</span>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#000168]">Motto</h4>
                <h5 className="text-md font-medium text-gray-700">"TO LOVE & TO SERVE"</h5>
                <p className="text-gray-600">
                  A symbol of Unity in Diversity, the school aims to create in the minds of students the right attitude of Selfless Service to people around them with the hope that it would, in turn, lead to the service of the nation. To disseminate in young minds of the students, the need of National Integration and insist on values such as Duty, Dignity and Discipline.
                </p>
              </div>
            </li>
            <li className="flex space-x-4">
              <div className="flex-shrink-0">
                {/* Icon Section */}
                <div className="w-12 h-12 bg-[#000168] rounded-full flex items-center justify-center text-white">
                  <span className="text-lg font-bold">V</span>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#000168]">Vision</h4>
                <p className="text-gray-600">
                  Empowered by the self-emptying love of God and inspired by our founder, we envision a just, equalitarian and harmonious society where all people live life in its fullness.
                </p>
              </div>
            </li>
            <li className="flex space-x-4">
              <div className="flex-shrink-0">
                {/* Icon Section */}
                <div className="w-12 h-12 bg-[#000168] rounded-full flex items-center justify-center text-white">
                  <span className="text-lg font-bold">Mi</span>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#000168]">Mission</h4>
                <p className="text-gray-600">
                  Nurturing persons to be well integrated to usher in the kingdom of God on earth who in turn become agents of societal change.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
