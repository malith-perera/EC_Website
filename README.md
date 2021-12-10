---------
  libec
=========

First you should change to ec directory.
cd ec/

To open in vim
./projects/vim/open.sh

To open web in vim
./projects/vim/web.sh

To cmake
./cmake.sh

To make and install in lib libec
./makeinstall.sh

or 

Setup (run both ./cmake.sh and ./makeinstall.sh above at once)
./setup.sh


-------
ec_Test
=======

To ec_Test change to test directory first.
cd ec/test

To setup (run both ./cmake.sh and ./makeinstall.sh)
./setup.sh

To cmake on ec_Test
./cmake

To make and install in bin ec_Test
./makeinstall.sh

To run tests
./test.sh

To debug with gdb
gdb ./bin/ec_Test

To check memory leaks with valgrind
valgrind ./bin/ec_Test
