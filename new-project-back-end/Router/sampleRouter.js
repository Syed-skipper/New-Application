const express = require('express');
const router = express.Router();

router.get('/read', function (req, res) {
  SampleModule.findAll({raw:true,order:[['firstname','ASC']]}).then(function (user) {
  res.status(200).send(user)
  }, function (err) {
    res.status(500).send("There was a problem in finding the Users")
  })
});
router.post('/create', function (req, res) {
  var request = req.body
  SampleModule.create(request).then(function (user1) {
    res.status(200).send({msg :'User Created Successfully'})
  }, function (err) {
    res.status(500).send({msg : "Email or Mobile Already Registered"})
  })
});

router.delete('/delete/:id', function (req, res) {
  var id = req.params.id
  SampleModule.destroy({where:{id:id}}).then(function (user) {
    res.send({msg :'Data deleted Successfully'}), 
    function (err) {
      res.send({msg : 'Cannot delete Data'})
    }
  })
})

router.put('/update/:id', function (req,res) {
  var id = req.params.id
  var request = req.body
  SampleModule.update(request,{where: {id:id}}).then(function (updated) {
   res.send({"msg" : 'Updated Successfully Updated'}),
   function(err) {
    res.send({"msg" : 'Not Able to Update'})
   }
  })
})

module.exports = router;


