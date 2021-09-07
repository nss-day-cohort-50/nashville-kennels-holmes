import React from "react"
import { useLocation } from "react-router-dom";
import "./SearchResults.css"
import Employee from "../employees/Employee"
import { Animal } from "../animals/Animal"
import Location from "../locations/Location"


export default () => {
    const location = useLocation()

    const displayAnimals = () => {
        if (location.state?.animals.length) {
            return (
                <React.Fragment>
                    <h2>Matching Animals</h2>
                    <section className="animals">
                        {
                            location.state.animals.map(item => <Animal animal={item} key={item.id} />)
                        }
                    </section>
                </React.Fragment>
            )
        }
    }

    const displayEmployees = () => {
        if (location.state?.employees.length) {
            return (
                <React.Fragment>
                    <h2>Matching Employees</h2>
                    <section className="employees">
                        {
                            location.state.employees.map(item => <Employee employee={item} key={item.id} />)
                        }
                    </section>
                </React.Fragment>
            )
        }
    }

    const displayLocations = () => {
        if (location.state?.locations.length) {
            return (
                <React.Fragment>
                    <h2>Matching Locations</h2>
<<<<<<< HEAD
                    <section className="locations"> {
                    location.state.locations.map(item => <Location location={item} key={item.id} />)
                    }
=======
                    <section className="locations">
                        {
                            location.state.locations.map(item => <Location location={item} key={item.id} />)
                        }
>>>>>>> 6f55980bb70d775284eb149a35d9981361eda2f4
                    </section>
                </React.Fragment>
            )
        }
    }

    return (
        <React.Fragment>
            <article className="searchResults">
                {displayAnimals()}
                {displayEmployees()}
                {displayLocations()}
            </article>
        </React.Fragment>
    )
}
