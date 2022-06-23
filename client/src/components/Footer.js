import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div class="footer">
        <div class="row1-footer">
            <div class="foot-logo" ><img src="http://localhost:8080/images/logo.png" width="200" height="200" /></div>
            <div class="foot-explore"></div>
            <div class="foot-news">
                <from class="foot-news-form">
                    <div class="news-title">Name:</div>
                    <input class="news-input" name="name" required="true"></input>
                    <div class="news-title">Email:</div>
                    <input class="news-input" name="email" required="true"></input>
                    <div></div>
                    <button name="submit" class="submit-news">SUBSCRIBE</button>
                </from>
            </div>
        </div>
    </div>
  )
}

export default Footer