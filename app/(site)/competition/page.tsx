import Navbar from "@/components/NavBar";
import Link from "next/link";
import Projects from "@/components/Projects";

const competition = () => {
  return (
    <div>
      <Navbar />
      <h1 className="pt-24 bg-gradient-to-b from-blue-300 via-green-200 to-yellow-300 bg-clip-text text-transparent text-center  px-3 md:px-20 mt-10 font-semibold text-6xl pb-5">
        SCAI is No Limit
      </h1>
      <div className="flex-col pt-10 text-center text-white md:max-w-[600px] max-w-[300px] w-auto mx-auto">
        <Projects/>
        <h1 className="text-3xl font-bold pb-5">Overview</h1>
        <h1 className="text-left text-[#6A717F] text-md md:text-xl font-semibold">
          The SCAI is No Limit is an AI design competition styled similarly to a
          game jam. The goal of this competition is to encourage members of the
          Santa Cruz Artificial Intelligence Club to develop a machine learning
          model over the course of a quarter based on a theme. The end result
          will be a machine learning model of the contestant’s choosing and a
          presentation of their results in front of the rest of the club
          members. The winner and runners-up will be determined by a vote of the
          club members, leadership, and any potential judges that are brought
          in.
        </h1>
        <h1 className="text-3xl font-bold py-5">Theme</h1>
        <h1 className="text-left text-[#6A717F] text-md md:text-xl font-semibold">
            TBD
        </h1>
        <h1 className="text-3xl font-bold py-5">Guidelines</h1>
        <h1 className="text-left text-[#6A717F] text-md md:text-xl font-semibold">
          The guidelines are as follows:
          <ul className="list-disc list-inside pl-5 pb-2">
            <li>
              There are no restrictions on languages or types of model
              contestants are allowed to use
            </li>
            <li>
              Groups of participants are restricted to no more than 4 members
            </li>
            <li>Participants may work alone </li>
            <li>
              To be eligible to win, participants must present their results in
              front of the club at large at the end of the competition
            </li>
            <li>
              The use of models not of your own creation, APIs, or any already
              existing model will result in disqualification and being barred
              from future competitions. For example, the use of an API to a
              large language model like ChatGPT will result in disqualification.
              As a counterexample, using tools like “Keras” or “TensorFlow” is
              allowed.
            </li>
            <li>
              If you need any clarification on the guidelines, do not hesitate
              to ask
            </li>
          </ul>
        </h1>

        <h1 className="text-3xl font-bold py-5">Resources</h1>
        <h1 className="text-left text-[#6A717F] text-md md:text-xl font-semibold">
          Databases:
          <ul className="list-disc list-inside pl-5 pb-2 text-blue-500">
            <li>
              <a
                href="https://www.kaggle.com/datasets"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kaggle
              </a>
            </li>
            <li>
              <a
                href="https://archive.ics.uci.edu/ml/index.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                UCI Machine Learning Repository
              </a>
            </li>
            <li>
              <a
                href="http://Data.gov"
                target="_blank"
                rel="noopener noreferrer"
              >
                Data.gov
              </a>
            </li>
            <li>
              <a
                href="https://www.openml.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                OpenML
              </a>
            </li>
          </ul>
          Research Databases:
          <ul className="list-disc list-inside pl-5 pb-2 text-blue-500">
            <li>
              <a
                href="https://www.jstor.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                JSTOR
              </a>
            </li>
            <li>
              <a
                href="https://www.ebsco.com/products/research-databases/free-databases"
                target="_blank"
                rel="noopener noreferrer"
              >
                EBSCO
              </a>
            </li>
            <li>
              <a
                href="https://library.ucsc.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                UCSC Library
              </a>
            </li>
          </ul>
          Learning:
          <ul className="list-disc list-inside pl-5 pb-2 text-blue-500">
            <li>
              <a
                href="https://developers.google.com/machine-learning/crash-course/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Developer ML Crash Course
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=jGwO_UgTS7I&list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stanford ML Course with Andrew Ng
              </a>
            </li>
          </ul>
          Code Libraries:
          <ul className="list-disc list-inside pl-5 pb-2 text-blue-500 ">
            <li>
              <a
                href="https://numpy.org/doc/stable/reference/"
                target="_blank"
                rel="noopener noreferrer"
              >
                NumPy
              </a>
            </li>
            <li>
              <a
                href="https://pandas.pydata.org/pandas-docs/stable/reference/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pandas
              </a>
            </li>
            <li>
              <a
                href="https://matplotlib.org/stable/api/pyplot_summary.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Matplotlib
              </a>
            </li>
            <li>
              <a
                href="https://seaborn.pydata.org/api.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Seaborn
              </a>
            </li>
            <li>
              <a
                href="https://scikit-learn.org/stable/modules/classes.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Scikit-learn
              </a>
            </li>
          </ul>
        </h1>
        <h1 className="text-3xl font-bold py-5">Previous Winners</h1>
        <h1 className="text-left text-[#6A717F] text-md md:text-xl font-semibold">
        Fall 2024
        <ul className="list-disc list-inside pl-5 pb-2">
            <li>#1: Mario Kart Image Classifier</li>
            <li>#2: Shipment Success Predictor</li>
            <li>#3: Cyberbullying Detector</li>
            <li>#4: Reinforcement Learning Rainbow Snake</li>            
        </ul>
        Winter 2024
        <ul className="list-disc list-inside pl-5 pb-2">
            <li>#1: Spam Detection</li>
            <li>#2: Pokemon Gen 1 Classifier</li>
            <li>#3: Identifying Squares</li>
            <li>#4: Classifying Cars</li>            
        </ul>
        Fall 2023
        <ul className="list-disc list-inside pl-5 pb-2">
            <li>#1: NBA Oracle</li>
            <li>#2: Poker Predict</li>
            <li>#3: Hedge Fund Battle Royale</li>
            <li>#4: Are Your Tweets Offensive</li>            
        </ul>
        Spring 2023
        <ul className="list-disc list-inside pl-5 pb-2">
            <li>#1: Playlist Generator</li>
            <li>#2: Terrain GPT</li>
            <li>#3: Spike NNs</li>
            <li>#4: Simulation Estimation</li>            
        </ul>
        Winter 2023
        <ul className="list-disc list-inside pl-5 pb-2">
            <li>#1: Sudoku Solver</li>
            <li>#2: Self Adjusting PID Controller</li>
            <li>#3: Brain Tumor Classification</li>
            <li>#4: Spike NNs</li>            
        </ul>
        Fall 2022
        <ul className="list-disc list-inside pl-5 pb-2">
            <li>#1: Fish Synthesis</li>
            <li>#2: Gradient Visualization</li>
            <li>#3: Earthquake Prediction</li>
            <li>#4: Tsunami Analysis</li>            
        </ul>
        </h1>
      </div>
    </div>
  );
};

export default competition;
