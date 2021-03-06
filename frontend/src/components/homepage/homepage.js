import React from "react";
import ArtistHomepageIntro from "./homepage-intro";
import "./homepage.scss";
import ArtistDataService from "../../services/artist.service"
export default class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.findByAlias = ArtistDataService.findByAlias.bind(this);
        this.getArtistAlias = this.getArtistAlias.bind(this);
        this.state = {
            social_objs: [],
            artist: "",
            bio: ""
        };
    }
    componentDidMount() {
        this.getArtistAlias();
      }
    getArtistAlias(){
        this.findByAlias("Xela-Raxis")
            .then((response) => {
                this.setState(
                    {
                        social_objs: response.data[0].social_links,
                        artist: response.data[0].alias,
                        bio: response.data[0].bio
                        
                    }
                );
                console.log(response.data);
                console.log(response.data.alias);
            })
            .catch(e => {
                console.log(e);
              });
    }
    render(){
       const bio_details = {
           introduction: "Artist/Producer",
           alias: this.state.artist,
           bio: this.state.bio
       };
        return(
            <div className = "homepageWrapper">
                <div className = "homepageMainDiv">
                    
                    <div className = "homepageIntroWrapper">
                        
                        <div className = "homepageIntroDiv">
                            <ArtistHomepageIntro social_objs = {this.state.social_objs} bio_details = {bio_details}>

                            </ArtistHomepageIntro>
                            <div className = "bioDetailsIntroDiv">
                                <p className = "bioDetailsIntro">{bio_details["bio"]}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}