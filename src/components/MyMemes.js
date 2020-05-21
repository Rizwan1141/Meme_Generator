import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Download } from 'react-bootstrap-icons';

class MyMemes extends Component {
    render(){
        return(
            <div >
                {
                    this.props.myMemes.map((meme, index) => {
                        return (
                            <div key={index} className="container">
                                <img   
                                    src={meme.data.url}
                                    alt="my-meme"
                                    className="my-meme-img"
                                />
                                <div className="overlay">
                                    <a href={meme.data.url} className="icon" title="download" 
                                        target="_blank"  download="image">
                                        <Download />
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        myMemes: state.myMemes
    }
}

export default connect(mapStateToProps, null) (MyMemes)