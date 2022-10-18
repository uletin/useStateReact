import { Link } from "react-router-dom";


export default function HomePage() {
    return (
        <div>
            <h2>Permasalahan yang sering terjadi menggunakan useState</h2>
            <ul>
                <li><Link to="/problem-one">1. Problem One</Link></li>
                <li><Link to="/problem-two">2. Problem Two</Link></li>
                <li><Link to="/problem-three">3. Problem Three</Link></li>
                <li><Link to="/problem-four">4. Problem Four</Link></li>
            </ul>
        </div>
    )
}