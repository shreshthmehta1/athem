import './App.css';
import React from 'react';
import * as Icon from 'react-feather';
import Microlink from '@microlink/react';
// import LazyLoad from 'react-lazyload'; // Optional for performance

const newsLinks = [
  "https://timesofindia.indiatimes.com/india/arun-kumar-mehta-is-jks-new-chief-secretary/articleshow/83014498.cms",
  "https://timesofindia.indiatimes.com/city/jammu/digital-services-eliminate-error-corruption-jk-chief-secretary/articleshow/89973319.cms",
  "https://www.phdcci.in/2023/09/27/dr-arun-kumar-mehta-ias-chief-secretary-jk-ut-government-highlights-jks-horticulture-potential-digitalization-progress-improved-eodb-ranking-and-cold-chain-expansion-target-of-5-lakh-mt-at/",
  "https://www.earlytimes.in/newsdet.aspx?q=316939",
  "https://www.newindianexpress.com/nation/2023/Nov/01/srinagar-diary-after-dgp-jk-to-get-new-chief-secretary-2628913.html",
  "https://government.economictimes.indiatimes.com/tag/arun+kumar+mehta",
  "https://www.indianmandarins.com/news/a-k-mehta-appointed-as-js-moefcc/525",
  "https://www.news18.com/news/india/jk-govt-appoints-ias-officer-arun-kumar-mehta-as-new-chief-secretary-3787574.html",
  "https://www.thedispatch.in/arun-kumar-mehta-ias-the-dispatch/",
  "https://www.knskashmir.com/jandk-govt-officially-appoints-arun-kumar-mehta-as-chief-secretary-80395",
  "https://thetypewriter.in/dr-arun-kumar-mehta-is-new-chief-secretary-of-jk-vows-to-work-for-the-welfare-of-people/"
];

const youtubeLinks = [
  "https://www.youtube.com/embed/9JfaalZ3VNw?si=QM_GByQKN9-puABf",
  "https://www.youtube.com/embed/G863MJGsIO4?si=bPyTprJZ-K9KzCBk",
  "https://www.youtube.com/embed/CzgXsn_siPM?si=MYxTElRd9CVYxfHh",
  "https://www.youtube.com/embed/dXtFOLokiSY?si=iMMF8LStcr-QaPgq",
  "https://www.youtube.com/embed/Qu7VK4Q3m8Q?si=ydfO2U0P-8JqiUeR",
  "https://www.youtube.com/embed/SAEt0QJPMb4?si=pb4Oe7grOb7bMfpR",
  "https://www.youtube.com/embed/AsFOVM3AQWk?si=AvYs2wzCtqW-dvfU",
  "https://www.youtube.com/embed/Ypdtr9Qb25A?si=BQocpyAdhjnaflx3",
  "https://www.youtube.com/embed/HsPOErfbQqk?si=QD0-yRtV_zZ5KglC",
  "https://www.youtube.com/embed/8S2NThl5fLs?si=knzc7Ljq_t-tga1f",
  "https://www.youtube.com/embed/W583EdIlUIE?si=FYk9r6DqJDhdai6u",
  "https://www.youtube.com/embed/spStC3N75RU?si=67tmTAchNASiJUIW",
  "https://www.youtube.com/embed/zdM1fxNDC6I?si=0JbjQcgoK6W0f08C",
  "https://www.youtube.com/embed/PdWeNh4a8yk?si=3eU-QsGuuK35kwpq",
  "https://www.youtube.com/embed/VPXsOCbds98?si=SewJK8CQsTdgJSWv",
  "https://www.youtube.com/embed/vCK3VBBjpps?si=bby9uaFSvzCq5Mpc",
  "https://www.youtube.com/embed/LOvgLP6B-zM?si=WUFLPu7pGD7KHKeU",
  "https://www.youtube.com/embed/esC936LixJc?si=pGB9C7BVSs_4kwbD",
  "https://www.youtube.com/embed/7-6LTaV6K1I?si=KGx0cIpoK1an0VMw",
  "https://www.youtube.com/embed/smXEQq4X5_U?si=fhTSlfB3o9eZ_ZPM",
  "https://www.youtube.com/embed/usqdo0LQaiA?si=KWr_hcJ3MhS0wo48",
  "https://www.youtube.com/embed/Ph3QnQ914sA?si=TeiZhWAKTavq28ai",
  "https://www.youtube.com/embed/Scnj3EwFn_Y?si=rK1whqQ7z6z1ldmb",
  "https://www.youtube.com/embed/MeFdZkl9Qxg?si=qX-rDBfFedwJK_nc",
  "https://www.youtube.com/embed/mgvZGil7BgQ?si=D1NvklTYDYVXK0xY",
  "https://www.youtube.com/embed/WVhYmptDA-4?si=SRQGzIhso2Twrfew",
  "https://www.youtube.com/embed/fmCTTEymj9w?si=8QIRa1bQZ32A00Dt",
  "https://www.youtube.com/embed/g3yc58TwKfs?si=-s6Eou5wRPd2Ga3a",
  "https://www.youtube.com/embed/tQvVoZ97LPI?si=TJYw3yaMma0vzlt0",
  "https://www.youtube.com/embed/SjVbKsZ8BWY?si=ZjrWiYwjCaJQaL8l",
  "https://www.youtube.com/embed/My8nkck4FG4?si=Ga6-oEw2PM8QLKRq"
];

function Tweet() {
  return (
    <div className="App">
      <main className="App-main">
        <div className="Column">
          {newsLinks.map((url, index) => (
            <div key={index}>
              <Microlink url={url} />
              <br /><br />
            </div>
          ))}
        </div>

        <div className="Column">
          {youtubeLinks.map((link, index) => (
            // <LazyLoad key={index} height={215} offset={100}>  // Optional
              <iframe
                key={index}
                src={link}
                width="360"
                height="215"
                style={{ border: 'none', marginBottom: '20px' }}
                title={`YouTube video ${index + 1}`}
                allowFullScreen
              ></iframe>
            // </LazyLoad>
          ))}
        </div>
      </main>

      <footer className="App-footer">
        <br />
        <a
          className="App-link"
          href="https://www.linkedin.com/in/arun-kumar-mehta-182175b6/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon.Linkedin />
        </a>
        <a
          className="App-head"
          href="https://aws.amazon.com/what-is-cloud-computing"
        >
          <img
            height="27px"
            src="https://d0.awsstatic.com/logos/powered-by-aws.png"
            alt="Powered by AWS Cloud Computing"
          />
        </a>
        <br />
      </footer>
    </div>
  );
}

export default Tweet;
