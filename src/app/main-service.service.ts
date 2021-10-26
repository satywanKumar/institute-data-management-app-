import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor(private http:HttpClient) { }
  baseUrl = "api url"

  //batch
  
  //get batch
  getBatch()
  {
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Accept':'application/json',
      'Access-Control-Allow-Origin':'*'
    });

    const options = {
      headers:headers,
      observe:"response" as 'body',
      "responseType?":"json"
    };

    return this.http.get<any>(this.baseUrl+'batch',options)
  }

    //get batch
    getBatchByCourse(courseName)
    {
      const headers = new HttpHeaders({
        'Content-Type':'application/json',
        'Accept':'application/json',
        'Access-Control-Allow-Origin':'*'
      });
  
      const options = {
        headers:headers,
        observe:"response" as 'body',
        "responseType?":"json"
      };
  
      return this.http.get<any>(this.baseUrl+'batch/courseName/'+courseName,options)
    }

       //get batch
       getBatchById(id)
       {
         const headers = new HttpHeaders({
           'Content-Type':'application/json',
           'Accept':'application/json',
           'Access-Control-Allow-Origin':'*'
         });
     
         const options = {
           headers:headers,
           observe:"response" as 'body',
           "responseType?":"json"
         };
     
         return this.http.get<any>(this.baseUrl+'batch/'+id,options)
       }

    //add batch
    addBatch(batchDetail)
    {
      const headers = new HttpHeaders({
        'Content-Type':'application/json',
        'Accept':'application/json',
        'Access-Control-Allow-Origin':'*'
      });
  
      const options = {
        headers:headers,
        observe:"response" as 'body',
        "responseType?":"json"
      };
  
      return this.http.post<any>(this.baseUrl+'batch',batchDetail,options);
    }

        //update batch
        UpdateBatch(id,batchDetail)
        {
          const headers = new HttpHeaders({
            'Content-Type':'application/json',
            'Accept':'application/json',
            'Access-Control-Allow-Origin':'*'
          });
      
          const options = {
            headers:headers,
            observe:"response" as 'body',
            "responseType?":"json"
          };
      
          return this.http.put<any>(this.baseUrl+'batch/'+id,batchDetail,options);
        }

        //delete batch

        deleteBatch(id)
        {
         const headers = new HttpHeaders({
           'Content-Type':'application/json',
           'Accept':'application/json',
           'Access-Control-Allow-Origin':'*'
         });
     
         const options = {
           headers:headers,
           observe:"response" as 'body',
           "responseType?":"json"
         };
     
         return this.http.delete<any>(this.baseUrl+'batch/'+id,options)
       }

    // ---------------------student----------------------------------
    addStudent(student)
    {
      const studentData = new FormData();
      studentData.append('name',student.name);
      studentData.append('fName',student.fName);
      studentData.append('gender',student.gender);
      studentData.append('dob',student.dob);
      studentData.append('email',student.email);
      studentData.append('phone',student.phone);
      studentData.append('add',student.add);
      studentData.append('pin',student.pin);
      studentData.append('joinDate',student.joinDate);
      studentData.append('batch',student.batch);
      studentData.append('courseFee',student.courseFee);
      studentData.append('photo',student.photo);
   
  
      const options = {
        observe:"response" as 'body',
        "responseType?":"json"
      };
  
      return this.http.post<any>(this.baseUrl+'student',studentData,options);
    }

     //get batch
     getStudentByCourse(courseName)
     {
       const headers = new HttpHeaders({
         'Content-Type':'application/json',
         'Accept':'application/json',
         'Access-Control-Allow-Origin':'*'
       });
   
       const options = {
         headers:headers,
         observe:"response" as 'body',
         "responseType?":"json"
       };
   
       return this.http.get<any>(this.baseUrl+'student/courseName/'+courseName,options)
     }

     //get studentByID
     getStudentByPhone(phone)
     {
       const headers = new HttpHeaders({
         'Content-Type':'application/json',
         'Accept':'application/json',
         'Access-Control-Allow-Origin':'*'
       });
   
       const options = {
         headers:headers,
         observe:"response" as 'body',
         "responseType?":"json"
       };
   
       return this.http.get<any>(this.baseUrl+'student/'+phone,options)
     }
     // delete by id
     deleteStudent(id)
     {
      const headers = new HttpHeaders({
        'Content-Type':'application/json',
        'Accept':'application/json',
        'Access-Control-Allow-Origin':'*'
      });
  
      const options = {
        headers:headers,
        observe:"response" as 'body',
        "responseType?":"json"
      };
  
      return this.http.delete<any>(this.baseUrl+'student/'+id,options)
    }


    // payment 
    // pay fee
      //add batch
      payFee(detail)
      {
        const headers = new HttpHeaders({
          'Content-Type':'application/json',
          'Accept':'application/json',
          'Access-Control-Allow-Origin':'*'
        });
    
        const options = {
          headers:headers,
          observe:"response" as 'body',
          "responseType?":"json"
        };
    
        return this.http.post<any>(this.baseUrl+'payment/paid',detail,options);
      }

      paymentHistory()
        {
          const headers = new HttpHeaders({
            'Content-Type':'application/json',
            'Accept':'application/json',
            'Access-Control-Allow-Origin':'*'
          });

          const options = {
            headers:headers,
            observe:"response" as 'body',
            "responseType?":"json"
          };

          return this.http.get<any>(this.baseUrl+'payment/history',options)
        }

        // get fee datail by phone
        paymentHistoryByPhone(phone)
        {
          const headers = new HttpHeaders({
            'Content-Type':'application/json',
            'Accept':'application/json',
            'Access-Control-Allow-Origin':'*'
          });

          const options = {
            headers:headers,
            observe:"response" as 'body',
            "responseType?":"json"
          };

          return this.http.get<any>(this.baseUrl+'payment/detail/'+phone,options)
        }


        getTotalCollectionByPhone(phone)
        {
          const headers = new HttpHeaders({
            'Content-Type':'application/json',
            'Accept':'application/json',
            'Access-Control-Allow-Origin':'*'
          });

          const options = {
            headers:headers,
            observe:"response" as 'body',
            "responseType?":"json"
          };

          return this.http.get<any>(this.baseUrl+'payment/totalpayment/'+phone,options)
        }


        // user
        signup(detail)
      {
        const headers = new HttpHeaders({
          'Content-Type':'application/json',
          'Accept':'application/json',
          'Access-Control-Allow-Origin':'*'
        });
    
        const options = {
          headers:headers,
          observe:"response" as 'body',
          "responseType?":"json"
        };
    
        return this.http.post<any>(this.baseUrl+'user/signup',detail,options);
      }

      login(detail)
      {
        const headers = new HttpHeaders({
          'Content-Type':'application/json',
          'Accept':'application/json',
          'Access-Control-Allow-Origin':'*'
        });
    
        const options = {
          headers:headers,
          observe:"response" as 'body',
          "responseType?":"json"
        };
    
        return this.http.post<any>(this.baseUrl+'user/login',detail,options);
      }

      getToken()
      {
        return localStorage.getItem('token');
      }

      isLogin()
      {
        if(localStorage.getItem('token') == null)
        {
          return false;
        }
        else
        {
          return true;
        }
      }

      getTotalStudent()
      {
        const headers = new HttpHeaders({
          'Content-Type':'application/json',
          'Accept':'application/json',
          'Access-Control-Allow-Origin':'*'
        });

        const options = {
          headers:headers,
          observe:"response" as 'body',
          "responseType?":"json"
        };

        return this.http.get<any>(this.baseUrl+'student/get/count',options)
      }

      getTotalBatch()
      {
        const headers = new HttpHeaders({
          'Content-Type':'application/json',
          'Accept':'application/json',
          'Access-Control-Allow-Origin':'*'
        });

        const options = {
          headers:headers,
          observe:"response" as 'body',
          "responseType?":"json"
        };

        return this.http.get<any>(this.baseUrl+'batch/get/count',options)
      }

      recentStudent()
      {
        const headers = new HttpHeaders({
          'Content-Type':'application/json',
          'Accept':'application/json',
          'Access-Control-Allow-Origin':'*'
        });

        const options = {
          headers:headers,
          observe:"response" as 'body',
          "responseType?":"json"
        };

        return this.http.get<any>(this.baseUrl+'student/data/recent-student',options)
      }

      countByGender(gender)
      {
        const headers = new HttpHeaders({
          'Content-Type':'application/json',
          'Accept':'application/json',
          'Access-Control-Allow-Origin':'*'
        });

        const options = {
          headers:headers,
          observe:"response" as 'body',
          "responseType?":"json"
        };

        return this.http.get<any>(this.baseUrl+'student/get/count/gender/'+gender,options)
      }






      
 


}
