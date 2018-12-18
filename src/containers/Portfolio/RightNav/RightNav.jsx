import './RightNav.scss'

class RightNav extends Component {
    render() {
        return (
            <div className="right-nav">
                <div className="social">
                    <a href="mailto:dev.sumitjoshi@gmail.com" className="social--item">
                        <svg className="social__icon">
                            <use xlinkHref={`${Icons}#icon-mail`}></use>
                        </svg>
                    </a>

                    <a href="https://github.com/sumitjoshi97" target="blank" className="social--item">
                        <svg className="social__icon">
                            <use xlinkHref={`${Icons}#icon-github`}></use>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/sumitjoshi97" target="blank" className="social--item">
                        <svg className="social__icon">
                            <use xlinkHref={`${Icons}#icon-linkedin`}></use>
                        </svg>
                    </a>
                </div>
            </div>
        )
    }
}

export default RightNav;