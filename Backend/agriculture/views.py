
from rest_framework.views import APIView
from .models import  React
from rest_framework.response import Response
from .serializer import  ReactSerializer
class ReactView(APIView):
    def get(self, request):
        output = [{"Student": output.Student, 
                   "Department": output.Department}
                  for output in React.objects.all()]
        return Response(output)

    def post(self, request):
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)  # Removed tuple