import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import EmployeeRepository from "../../repositories/EmployeeRepository";
import useResourceResolver from "../../hooks/resource/useResourceResolver";
import useSimpleAuth from "../../hooks/ui/useSimpleAuth";
import person from "./person.png"
import "./Employee.css"




export default ({ employee }) => {
    const [animalCount, setCount] = useState(0)
    const [location, markLocation] = useState({ name: "" })
    const [classes, defineClasses] = useState("card employee")
    const { employeeId } = useParams()
    const { getCurrentUser } = useSimpleAuth()
    const { resolveResource, resource } = useResourceResolver()
    
    

   
 

    useEffect(() => { console.log(employee)
        if (employeeId) {
            defineClasses("card employee--single")
        }
        resolveResource(employee, employeeId, EmployeeRepository.get)
    }, [])
    
    

    useEffect(() => {
        
        if (resource?.employeeLocations?.length > 0) {
            markLocation(resource.location)
        }
    }, [resource])
    
    
    return (
        <article className={classes}>
            <section className="card-body">
                <img alt="Kennel employee icon" src={person} className="icon--person" />
                <h5 className="card-title">
                    {
                        employeeId
                            ? resource.name
                            : <Link className="card-link"
                                to={{
                                    pathname: `/employees/${resource.id}`,
                                    state: { employee: resource }
                                }}>
                                {resource.name}
                            </Link>

                    }

                </h5>
                
                    {resource
                        ? `Currently kicking ${resource?.animals?.length} puppies` //currently not working//
                        : `Caring for ${resource?.animals?.length} animals` //currently working//
                    }
                    
                    {resource?.locations?.length > 0
                        ? `Working at ${resource.locations[0].location.name}` //currently working//
                        : `Working at ${resource?.location?.name}` //currently not working//
                        }
                    
                

                {
                    getCurrentUser().employee
                        ? <button className="btn--fireEmployee"
                        onClick={() => EmployeeRepository.delete(employee.id)}>Fire</button>
                        : ""
                }

            </section>

        </article>
    )
}
