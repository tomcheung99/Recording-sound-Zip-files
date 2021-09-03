
  var countTime = 0;
  var timeer = null;
  const player = document.getElementById('player');
  var recordArray = [];
  var WavFiles = [];
  var WavFilesUrl = [];
  var WavFilesName = [];
  var WavFilesNameForTXT = [];



  const handleSuccess = function(stream) {
    if (window.URL) {
      player.srcObject = stream;
    } else {
      player.src = stream;
    }
  };



  navigator.mediaDevices.getUserMedia(
      { audio: true, video: false })
      .then(handleSuccess);
      jQuery(document).ready(function () {
        var $ = jQuery;
        var myRecorder = {
            objects: {
                context: null,
                stream: null,
                recorder: null
            },
            init: function () {
                if (null === myRecorder.objects.context) {
                    myRecorder.objects.context = new (
                            window.AudioContext || window.webkitAudioContext
                            );
                }
            },
            start: function () {
                var options = {audio: true, video: false};
                navigator.mediaDevices.getUserMedia(options).then(function (stream) {
                    myRecorder.objects.stream = stream;
                    myRecorder.objects.recorder = new Recorder(
                            myRecorder.objects.context.createMediaStreamSource(stream),
                            {numChannels: 1}
                    );
                                      

                    $('.clearBtn').click(function() {
                        myRecorder.objects.recorder = null;
                        $('.showTime').css('visibility','hidden');
                        document.getElementById('recordBtn').style.borderRadius = "25px";
                        $('.clearBtn').css('visibility','hidden');

                    });

                    $('.recordBtn').css('color','#989796');
                    $('.recordBtn').css('animation','MoveUpDown 1s linear infinite');
                    $('.recordBtn').css('position','#absolute');
                    $('.recordBtn').css('left','0');
                    $('.recordBtn').css('bottom','0');

                    $('.showTime').css('visibility','initial');
                    $('.clearBtn').css('visibility','initial');





                    myRecorder.objects.recorder.record();
                }).catch(function (err) {});

            },
            stop: function (listObject) {
                if (null !== myRecorder.objects.stream) {
                    myRecorder.objects.stream.getAudioTracks()[0].stop();
                }
                if (null !== myRecorder.objects.recorder) {
                    myRecorder.objects.recorder.stop();

                    $('.showTime').css('visibility','hidden');
                    $('.clearBtn').css('visibility','hidden');


                    // Validate object
                    if (null !== listObject
                            && 'object' === typeof listObject
                            && listObject.length > 0) {

                        // Export the WAV file
                        myRecorder.objects.recorder.exportWAV(function (blob) {
                            WavFiles.push(blob);
                            var url = (window.URL || window.webkitURL)
                                    .createObjectURL(blob);

                            // Prepare the question content
                            var numItems = $('.row').length +1
                            var questioncontent = document.getElementById("question").value;
                            var questioncontentObject = $('<p id="questionContent">'+ 'Question ' + numItems + ' - ' + questioncontent +'</p>')

                           
                            // Prepare the playback               
                            var audioObject = $('<audio controls></audio>')
                                    .attr('src', url);

                            // Prepare the download link
                            var downloadObject = $('<a>&#9660;</a>')
                                    .attr('href', url)
                                    // .attr('download', new Date().toUTCString() + '.wav');
                                    .attr('download', 'Q' + numItems + '.wav');
                            
                            WavFilesUrl.push(url)
                            // WavFilesName.push(new Date().toUTCString() + '.wav');
                            WavFilesName.push( 'Q' + numItems + '.wav');


                            // WavFilesNameForTXT.push(new Date().toUTCString() + '.wav' + " " + questioncontent  + "\n");
                            WavFilesNameForTXT.push( 'Q' + numItems + '.wav' + "\t" + questioncontent  + "\r");


                            // Wrap everything in a row
                            var holderObject = $('<li class="row"></li>')
                                    .append(questioncontentObject)
                                    .append(audioObject)
                                    .append(downloadObject);

                            // Append to the list
                            listObject.append(holderObject);
                        });
                    }
                }
            }
        };


        


        // Prepare the recordings list
        var listObject = $('[data-role="recordings"]');

        // Prepare the record button
        $('[data-role="controls"] > #recordBtn').click(function () {
            // Initialize the recorder
            myRecorder.init();

    
            // Get the button state 
            var buttonState = !!$(this).attr('data-recording');
            
            // Toggle
            if (!buttonState) {
                $(this).attr('data-recording', 'true' && $(recordBtn).value === "")
                document.getElementById('recordBtn').style.borderRadius = "5px";
                myRecorder.start();

                document.getElementById("recordBtn")?(S=new Date,T=setInterval("showTime.innerHTML=(new Date-S)/1e3")):clearInterval(T);


                $('.recordBtn').click(function() {
                    var current_pull = parseInt($('.holder').css('transform').split(',')[5]);
                    
                     }
                );

            } else {
                $(this).attr('data-recording', '');
                myRecorder.stop(listObject);   
                console.log("stop");
                document.getElementById('recordBtn').style.borderRadius = "25px";

        
                 // Total Record number
                var numItems = $('.row').length + 1
                var TotalRecord = document.getElementById("TotalRecord").innerText = 'Total ' + numItems;
            }
        });


    //Zip file     
            $("#Zipbtn").click(function (){
                        var zip = new JSZip();  
                                              
                        zip.file("Question.txt", new File([WavFilesNameForTXT.toString().replace(/,/g, '')], "Question.txt"))

                        for (let i = 0; i <WavFilesName.length; i++) {
                            zip.file(WavFilesName[i], WavFiles[i]);
                        }
                        zip.generateAsync({type:"blob",  
                        compression: "DEFLATE",
                        compressionOptions: {
                        level: 9
                    }})
                        .then(function (content) {
                        saveAs(content, "RecordZipAllFile.zip");
                        })        
                    });
    });
    