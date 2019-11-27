import React,{ Component} from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation';
import Projects from '../components/Projects/Projects';
import Tickets from '../components/Tickets/Tickets';
import Comments from '../components/Comments/Comments';
import Form from '../components/Form/Form';
// import { userInfo } from 'os';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [ // every project object in the projects array has an "id", "tittle" & "ticket"
        {id:0, title:'Eshop Project', ticket:['An issue to the EP.']},
        {id:1, title:'Field Services Project', ticket:['An issue to the FSP.']},
        {id:2, title:'System Upgrade Project', ticket:['An issue to the SUP.']}
      ],
      //the flags help in the conditional rendering of the "Ticket", "Comment" & "Form"
      //sections of the interface
      ticketFlag: false,
      displayTicket:[],
      commentFlag: false,
      displayComment: [],
      formFlag: false
    };
  }

  //it is called onClick of a project and renders the tickets attached to it
  renderTickets = (projectId) => {
    let dT=[...this.state.projects[projectId].ticket];
    this.setState({displayTicket: dT, ticketFlag: true});
  }

  //it is called onClick of a ticket and renders the comments attached to it
  renderComments = (ticket) => {
    this.setState({displayComment:ticket, commentFlag: true});
  }

  //it is called onClick of the "New Request" button and renders the form section
  popUpRequest = () => {
    this.setState({formFlag: true});
  }

  //a new issue / ticket and the project it refers to are added in the state
  changeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({[name]:value});
  }

  // called onSubmit
  //it updates the project in the state with the new ticket
  logRequest = (event) => {
    event.preventDefault();
    let newProjects = [...this.state.projects];
    newProjects[this.state.selectProject].ticket = newProjects[this.state.selectProject].ticket.concat(this.state.newIssue);
    this.setState({projects:newProjects,formFlag:false});
  }

 
  render () {
    return (
      <div className="App">
        <Navigation
          popUpForm = {this.popUpRequest}
        />
        
        <section className="ProjectsAndTickets">
          <Projects
            projects = {this.state.projects}
            showTicket = {this.renderTickets}
          />
          
          <Tickets
            projects = {this.state.projects}
            display = {this.state.displayTicket}
            flag = {this.state.ticketFlag}
            showComment = {this.renderComments}
          />
        </section>

        <section className="IssueAndComments">
          <Comments
            issue= {this.state.displayComment}
            flag={this.state.commentFlag}
          />
        </section>

        <section className="FormRequest">
          <Form 
            flag={this.state.formFlag}
            projects = {this.state.projects}
            logForm = {this.logRequest}
            changeState = {this.changeHandler}
          />
        </section>
      </div>
      
    );
  }
}



export default App;
