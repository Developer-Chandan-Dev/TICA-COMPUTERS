import { Footer, Navbar, Banner } from "../../../components/user";
import Details from "../../../components/user/material/Details";
import { useParams } from "react-router-dom";
import useFetchSingleData from "../../../hooks/utils/useFetchSingleData";
import Spinner from "../../../components/utility/Spinner";

const MaterialDetails = () => {
  const { materialDetailsId } = useParams();
  const { data, error, loading } = useFetchSingleData(
    "/api/v1/instructor/materials",
    materialDetailsId
  );

  console.log(data);

  return (
    <section className="flex h-screen pageControl w-full">
      <section className="overflow-auto w-fill-available">
        <Navbar />
        <Banner
          title={`Download - Materials`}
          desc="Here are some materials for you provided by our insititute. You can download these materials and if you have any type of materials for students then contact our institute and submit your notes, ppt etc. You given material also will appear in this list."
        />
        <>
          {error && <p>{error}</p>}
          {loading && (
            <div className="w-full h-[400px] flex-center">
              <Spinner />
            </div>
          )}
          <Details
            _id={data._id}
            title={data.title}
            desc={data.desc}
            author={data.author}
            createdAt={data.createdAt}
            tag={data.tag}
            fileBanner={data.fileBanner}
            fileUrl={data.fileUrl}
          />
        </>

        <Footer />
      </section>
    </section>
  );
};

export default MaterialDetails;
