import { skills, experiences, projects } from "../../profile";
import Image from 'next/image';
import Link from "next/link";

 const Card =()=>{
     return(
        <section>
            <div className="row">
                <div className="col-md-12">
                <div className="card card-body bg-dark">
                    <div className="row">
                    <div className="col-md-12 my-2">
                        <h1 className="text-center text-light">Se parte de la Familia Timeless Support</h1>
                    </div>
                    {projects.map(({ name, description, image }, index) => (
                        <div className="col-md-4 p-2" key={index}>
                        <div className="card">
                            <div className="overflow">
                            <img
                                src={`/${image}`}
                                alt=""
                                className="card-img-top"
                            />
                            </div>
                            <div className="card-body">
                            <h3>{name}</h3>
                            <p>{description}</p>
                            <a href="#!">Know More</a>
                            </div>
                        </div>
                        </div>
                    ))}

                    <div className="col-md-12 mt-4">
                        <div className="text-center">
                        <Link href="/portfolio">
                            <a className="btn btn-outline-light">More Projects</a>
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
};

export default Card;