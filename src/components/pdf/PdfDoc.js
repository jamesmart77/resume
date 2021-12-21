import { 
  PDFDownloadLink, 
  Document, 
  Page, 
  Text, 
  View,
  Font, 
  Link,
  Image,
  StyleSheet,
 } from '@react-pdf/renderer';
import { Button, Icon } from 'react-materialize';
import regularFont from './fonts/Roboto-Regular.woff';
import helloImg from './images/hello.png';

const blue100 = '#1a1446';
const darkTeal = '#06748c';
const grey2 = '#565656';
const grey4 = '#e6e6e6';
const white = '#ffffff';

Font.register({
  family: 'Roboto',
  src: regularFont,
  fontStyle: 'normal', 
  fontWeight: 'light'
});

const styles = StyleSheet.create({
  body: {
    fontFamily: 'Roboto',
    paddingBottom: 65,
  },
  headerSection: {
    backgroundColor: blue100,
    color: white,
    paddingVertical: 50,
    paddingHorizontal: 35,
    title: {
      fontSize: 28,
      fontWeight: 'bold',
    },
    job: {
      fontSize: 14,
      paddingTop: 5
    },
    contact: {
      fontSize: 12,
      paddingTop: 5
    },
    emailLink: {
      textDecoration: 'none',
      color: white,
    },
  },
  introSection: {
    paddingHorizontal: 35,
    leftCol: {
      position: 'relative',
      left: 0,
      top: 20,
      width: '50%',
      resumeLink: {
        backgroundColor: darkTeal,
        borderRadius: 5,
        color: white,
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 10,
        paddingTop: 10,
        textAlign: 'center',
        textDecoration: 'none',
        width: '90%',
      },
    },
    rightCol: {
      position: 'absolute',
      right: 35,
      top: 30,
      width: '50%',
      image: {
        paddingTop: 10,
      },
    },
  },
  contentSection: {
    top: 40,
    paddingHorizontal: 35,
    title: {
      borderColor: white,
      borderBottomColor: grey4,
      borderWidth: 1,
      color: blue100,
      fontSize: 17,
      paddingBottom: 5,
      paddingTop: 40,
    },
    tech: {
      subText: {
        color: grey2,
        fontSize: 10,
        paddingTop: 5,
        link: {
          color: darkTeal,
          fontWeight: 'bold',
          textDecoration: 'none',
        },
      },
    },
    experience: {
      descriptor: {
        fontSize: 10,
        color: grey2,
      },
      title: {
        fontSize: 14,
      },
    },
  },
  general: {
    fontSize: 13,
    lineHeight: 1.5,
  },
});

const PdfContent = () => {
  return (
    <Document title="James Martineau Resume" creator="James Martineau">
      <Page style={styles.body}>
        <View style={styles.headerSection}>
          <Text style={styles.headerSection.title}>James Martineau</Text>
          <Text style={styles.headerSection.job}>Principal Software Engineer | Liberty Mutual Insurance</Text>
          <Text style={styles.headerSection.contact}>
            <Text>603.509.8454 | </Text>
            <Link 
              style={styles.headerSection.emailLink} 
              src="mailto:jamesmart77@gmail.com"
            >
              jamesmart77@gmail.com
            </Link>
          </Text>
        </View>
        <View style={styles.introSection}>
          <View style={styles.introSection.leftCol}>
            <Text style={[styles.general, { paddingBottom: 5 }]}>
              Hey there! My name is James and I love being a developer!
              Why is that? Well, hopefully that'll be clear by my resume, but the gist
              is that it's all about the people, culture, and being able to create 
              beautiful solutions. Go ahead and give my resume a gander for some more 
              info. Below is the "bland" version. If you want to see it in a more fun and 
              creative way, click the link below!
            </Text>  
            <Link 
              src="https://jamesmart77.github.io/resume" 
              style={styles.introSection.leftCol.resumeLink}
            >
              Online Resume
            </Link>  
          </View>
          <View style={styles.introSection.rightCol}>
            <Image style={styles.introSection.rightCol.image} src={helloImg} cache />
          </View>
        </View>
        <View style={styles.contentSection}>
          <Text style={styles.contentSection.title}>Tech Background</Text>
          <Text style={[styles.general, { paddingTop: 5 }]}>
            React, Redux, NodeJs, ExpressJs, Postgres, AWS, Java, Spring, TDD, Micro Services
          </Text>
          <Text style={styles.contentSection.tech.subText}>
            For more tech expertise and project examples, please see my 
            {' '}
            <Link
              src="https://jamesmart77.github.io/portfolio"  
              style={styles.contentSection.tech.subText.link}
            > 
             portfolio page
            </Link>
            .
          </Text>
        </View>
        <View style={styles.contentSection}>
          <Text style={styles.contentSection.title}>Experience</Text>
          <View wrap={false}>
            <Text style={[
              styles.contentSection.experience.descriptor,
              { paddingTop: 15, paddingBottom: 3 },
            ]}>2018 - Present</Text>
            <Text style={styles.contentSection.experience.title}>Software Engineering</Text>
            <Text style={[
              styles.contentSection.experience.descriptor,
              { paddingBottom: 10, paddingTop: 3 },
            ]}>Liberty Mutual Insurance</Text>
            <Text style={styles.general}>
              Specialize in Postgres, Express.Js, React, and NodeJs full stack as well as Spring Boot for web apps while helping lead the team in development,
              well-architected design principles, innovation disciplines, mentoring, and reinforcing relationships
              built on trust. Promotion path has been: Software Engineer, to Senior, to Principal.
            </Text>
          </View>
          <View wrap={false}>
            <Text style={[
              styles.contentSection.experience.descriptor,
              { paddingTop: 25, paddingBottom: 3 },
            ]}>2015 - 2018</Text>
            <Text style={styles.contentSection.experience.title}>IT Project Coordinator / Data Analyst</Text>
            <Text style={[
              styles.contentSection.experience.descriptor,
              { paddingBottom: 10, paddingTop: 3 },
            ]}>Liberty Mutual Insurance</Text>
            <Text style={styles.general}>
              Automated Liberty Gateway non-employee management process and assisted in automation of Supplier
              Relationship management processes. Also worked to support organization's agile transformation and
              present metrics for data driven decisions.
            </Text>
          </View>
          <View wrap={false}>
            <Text style={[
              styles.contentSection.experience.descriptor,
              { paddingTop: 25, paddingBottom: 3 },
            ]}>2013 - 2015</Text>
            <Text style={styles.contentSection.experience.title}>Project Analyst / Quality Assurance</Text>
            <Text style={[
              styles.contentSection.experience.descriptor,
              { paddingBottom: 10, paddingTop: 3 },
            ]}>Bottomline Technologies</Text>
            <Text style={styles.general}>
              Worked with Digital Banking clients for enterprise software implementations and configurations. Also
              made concerted efforts to automate resource management reporting for program lines using VBA. Constructed
              technical documentation for clients and ran creative testing scripts to ensure product quality.
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default function PdfDoc() {
  return (
    <Button waves="light" className="pdf-btn">
      <Icon>file_download</Icon>
      <PDFDownloadLink document={<PdfContent />} fileName="James_Martineau_Resume.pdf">
        {({ loading }) =>
          loading ? 'Preparing PDF...' : 'Download PDF Resume'
        }
      </PDFDownloadLink>
    </Button>
  )
}