import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const About = () => {

  const { t } = useTranslation();

  return (
    <div className="about-section py-16 bg-white text-center">
        <h2 className="text-4xl font-bold text-black mb-4">{t('home-about.main-heading')}</h2>
        <p className="text-xl text-black mb-12">
        {t('home-about.sub-heading')}
        </p>
        <div class="container">
          <div class="row">
            <div class="grid col-span-1">
              <div class="featuredPropBox grid col-span-1">
                <ul>
                  <li>
                   
                    <a href="/a">
                      <div class="fplogo">Who We Are?</div>
                      <div class="fptext">
                        <Link to='/about' className="card-button text-white px-6">Read More</Link>
                      </div>
                    </a>{" "}
                  </li>
                  <li>
                   
                    <a href="/a">
                      <div class="fplogo">Our Goals!</div>
                      <div class="fptext">
                        <Link to='/about' className="card-button text-white px-6">Read More</Link>
                      </div>
                    </a>{" "}
                  </li>
                  <li>
                   
                    <a href="/a">
                      <div class="fplogo">Our Vision!</div>
                      <div class="fptext">
                        <Link to='/about' className="card-button text-white px-6">Read More</Link>
                      </div>
                    </a>{" "}
                  </li>
                  <li>
                   
                    <a href="/a">
                      <div class="fplogo">Our Mission!</div>
                      <div class="fptext">
                        <Link to='/about' className="card-button text-white px-6">Read More</Link>
                      </div>
                    </a>{" "}
                  </li>
                  <li>
                   
                    <a href="/a">
                      <div class="fplogo">AIC by F&F!</div>
                      <div class="fptext">
                        <Link to='/about' className="card-button text-white px-6">Read More</Link>
                      </div>
                    </a>{" "}
                  </li>
                  <li>
                   
                    <a href="/a">
                      <div class="fplogo">AIC Inauguration!</div>
                      <div class="fptext">
                        <Link to='/about' className="card-button text-white px-6">Read More</Link>
                      </div>
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default About