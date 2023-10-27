import Navbar from "@/components/NavBar";
import Link from "next/link";

const competition = () => {
  return (
    <div>
      <Navbar />
      <h1 className="pt-24 bg-gradient-to-b from-blue-300 via-green-200 to-yellow-300 bg-clip-text text-transparent text-center  px-3 md:px-20 mt-10 font-semibold text-6xl pb-5">
        SCAI is No Limit
      </h1>

      <div className="flex-col pt-10 text-center text-white md:max-w-[600px] max-w-[300px] w-auto mx-auto">
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
          The theme of the Fall 2022 competition, as announced during the
          meeting on October 10th, is “Hedge Your Bets”. Contestants are
          encouraged to be creative with their interpretation of the theme. If
          you think your idea is a stretch of the imagination, don’t hesitate to
          reach out to one of the leadership staff for clarification or a
          go-ahead.
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
              <Link href="https://www.kaggle.com/datasets">Kaggle</Link>
            </li>
            <li>
              <Link href="https://archive.ics.uci.edu/ml/index.php">
                UCI Machine Learning Repository
              </Link>
            </li>
            <li>
              <Link href="http://Data.gov">Data.gov</Link>
            </li>
            <li>
              <Link href="https://www.openml.org/">OpenML</Link>
            </li>
          </ul>
          Research Databases:
          <ul className="list-disc list-inside pl-5 pb-2 text-blue-500">
            <li>
              <Link href="https://www.jstor.org/">JSTOR</Link>
            </li>
            <li>
              <Link href="https://www.ebsco.com/products/research-databases/free-databases">
                EBSCO
              </Link>
            </li>
            <li>
              <Link href="https://library.ucsc.edu/">UCSC Library</Link>
            </li>
          </ul>
          Learning:
          <ul className="list-disc list-inside pl-5 pb-2 text-blue-500">
            <li>
              <Link href="https://developers.google.com/machine-learning/crash-course/">
                Google Developer ML Crash Course
              </Link>
            </li>

            <li>
              <Link href="https://www.youtube.com/watch?v=jGwO_UgTS7I&list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU">
                Stanford ML Course with Andrew Ng
              </Link>
            </li>
          </ul>
          Code Libraries:
          <ul className="list-disc list-inside pl-5 pb-2 text-blue-500 ">
            <li>
              <Link href="https://numpy.org/doc/stable/reference/">NumPy</Link>
            </li>

            <li>
              <Link href="https://pandas.pydata.org/pandas-docs/stable/reference/index.html">
                Pandas
              </Link>
            </li>
            <li>
              <Link href="https://matplotlib.org/stable/api/pyplot_summary.html">
                Matplotlib
              </Link>
            </li>
            <li>
              <Link href="https://seaborn.pydata.org/api.html">Seaborn</Link>
            </li>
            <li>
              <Link href="https://scikit-learn.org/stable/modules/classes.html">
                Scikit-learn
              </Link>
            </li>
          </ul>
        </h1>
      </div>
    </div>
  );
};

export default competition;
