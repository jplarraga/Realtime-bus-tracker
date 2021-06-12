# Realtime-bus-tracker
Map animation of a particular bus route and it's stops

<h2> Description </h2>
  
<p> This proyect is a Map animation of a certain location of Boston, the purpose of the excercise is to create a mark iteration over a set of bus stations and the mark is going to change after a certain time interval to simulate a bus movement over one chosen route (route 1). For This information from a json file from mvta.com has been fetched and then the attributes of longitude and latitude have been abstracted and pushed into an empty array that will contain the coordinates of all the bus stops of route 1, after the mark has been related to the function move() that will run the information fetching and then it will create a loop over each iterations of the bus stops array</p>

<h2> Instalation </h2>

<ul>
  <li> The code is free to download from this repository</li>
  <li>In order to make the code function you will have to create a mapbox account at the mapbox.com site and then obtain your own access token</li>
  <li>The json file used to obtain the data for the bus stations is found at the mbta.com site</li>
  <li>If you are using VS Code I would recomend you download the LiveServer extention in order to watch the changes from the code live</li>
</ul>

<h2> Usage </h2>

<p> There are two main uses on the code applied for the project, the first one is the use of fetching to obtain data from external urls, this is particularly usefull since most of the applications we may want to run depend on external data, plus the fact that having the information stored in one database from an external server is much more time effective in terms of speed than actually storing that data on our web site or web app we will use for this purpose. The fetching technique also uses the async/await components which are the nuew features of ES8.

The second usage is geo location in which we can graphically represent the position of an object in a certain location, we can use this concept in order to track, predict or calculate the position and movement of buses, cars, or any object that could be tracked by any device that send information of its position to a database.
</p>

<h2> Support </h2>
<p>
If you are stuck somewhere in this code, please feel free to contact me at:

<h4>Email:</h4>

<a href="mailto:jplarraga@gmail.com">jplarraga@gmail.com</a>

<h4>Twitter:</h4>

<p>@jplarraga</p>
<br>

<h2>Roadmap</h2>
<p> As the project grows, it's possible to keep adding the rest of the bus stops using a different mark, there is also the chance to personalize the icons and there is even possible to implement informations with pictures about each bus stop. Since the information comes from the actuall bus stops it could be possible to obtain the information in real time of the buses in actuall movement and we could track each bus at a certain time intervals and leave the bus stations static so we know when the bus will be arriving at a certain bus stop<p>
  
<h2>License Information</h2>
<p>Copyright (c) 2021 Juan Larraga

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. </p>

<br>
  
</p>
