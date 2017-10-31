function IncrementalCtrl($scope, $interval) {
    // Basic variable declaration - keep track of how many of each
    // item we currently own, and how much the new ones should cost.
    $scope.numWidgets = 0;
    $scope.numNoviceWidgeteers = 0;
    $scope.numMasterWidgeteers = 0;
    $scope.noviceWidgeteerCost = 10;
    $scope.masterWidgeteerCost = 25;

    // Increase numWidgets every time produce-widget is clicked
    $scope.produceWidget = function() {
        $scope.numWidgets++;
    }

    // Same for novice-widgeteer
    $scope.hireNoviceWidgeteer = function() {
        $scope.numNoviceWidgeteers++;

        // Deduct cost
        $scope.numWidgets -= $scope.noviceWidgeteerCost;

        // Increase cost for the next one, using Math.ceil() to round up
        $scope.noviceWidgeteerCost = Math.ceil($scope.noviceWidgeteerCost * 1.1);
    }

    // Ditto for master-widgeteer... you get the idea
    $scope.hireMasterWidgeteer = function() {
        $scope.numMasterWidgeteers++;
        $scope.numWidgets -= $scope.masterWidgeteerCost;
        $scope.masterWidgeteerCost = Math.ceil($scope.masterWidgeteerCost * 1.1);
    }

    // Run UI update code every 10ms
    $interval(function() {
        // Novices add 1 per second (1/100 every 10ms)
        $scope.numWidgets += ($scope.numNoviceWidgeteers * 1 / 100);

        // Masters add 5 per second (5/100 every 10ms)
        $scope.numWidgets += ($scope.numMasterWidgeteers * 5 / 100);
    }, 10);
}
