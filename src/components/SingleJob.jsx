import {Card, Col, Container, Form, ListGroup, ListGroupItem, Row,} from "react-bootstrap"
import { Briefcase, BuildingAdd, Check, ListCheck } from "react-bootstrap-icons"
import { useNavigate } from "react-router-dom"


const SingleJob = ({job}) =>{
    const navigate = useNavigate() 
    return(
        <Card id="card" className="h-100 mb-2" >
                    <Card.Body className="d-flex justify-content-between flex-column">
                        <Card.Title>{job.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {job.category}
                        </Card.Subtitle>
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                {" "}
                                <Card.Text>
                                    {job.candidate_required_location}
                                </Card.Text>
                                <Card.Text>
                                    <span className="" style={{ fontSize: "12px" }}>
                                        Published at:
                                    </span>{" "}
                                    <br />
                                    {job.publication_date.substring(0, 10)}
                                </Card.Text>
                            </div>
                            <div className="d-flex flex-column">
                                <button
                                    className="btn addJob rounded-pill text-nowrap text-truncate mb-1 "
                                    style={{
                                        fontSize: "16px",
                                        height: "40px",
                                        maxWidth: "143px",
                                    }}
                                    onClick={()=> navigate(`/jobdetails/${job.title}`)}
                                >
                                    <BuildingAdd className=" pb-1" />
                                    Apri annuncio
                                </button>
                                    <a
                                        className="btn addJob rounded-pill text-nowrap text-truncate  "
                                        style={{
                                            fontSize: "16px",
                                            height: "40px",
                                            maxWidth: "143px",
                                            width: "143px",
                                        }}
                                        href={job.url}
                                    >
                                        <Briefcase className=" pb-1" />
                                        {job.company_name}
                                    </a>
                              
                            </div>
                        </div>
                    </Card.Body>
                </Card>
        
    )
} 

export default SingleJob